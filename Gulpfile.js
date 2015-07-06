var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');

// prevent the errors stop watch
var gulp_src = gulp.src;
gulp.src = function() {
  return gulp_src.apply(gulp, arguments)
    .pipe(plumber(function(error) {
      // Output an error message
      gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
      // emit the end event, to properly end the task
      this.emit('end');
    }));
};

var showGreen = function(task) {
  gutil.log(gutil.colors.green(':[' + task + ']: finshed without errors'));
};

// sass compiler
gulp.task('sass', function(done) {
  gulp.src('./sass/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
  showGreen('sass');
  done();
});

// watcher
gulp.task('watch', function() {
  watch('./sass/**/*.scss', function(vynil) {
    gutil.log(gutil.colors.blue('[watch]: file edited : ' + vynil.relative));
    gulp.start('sass');
  });
});

// static server
gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(express.static(__dirname));
  app.listen(4000);
});

gulp.task('default', ['express'], function() {});
