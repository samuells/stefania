var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');

 
gulp.task('sass', function () {
    gulp.src('./sass/styles.scss')
        .pipe(sourcemaps.init())
          .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
   gulp.watch('./sass/**/*.scss', ['sass']);
});