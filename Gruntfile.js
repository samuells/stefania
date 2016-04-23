module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
      single_file: {
        src: 'css/styles.css',
        dest: 'css/styles.min.css'
      },
    },
    watch: {
      grunt: {
        files: ['Gruntfile.js']
      },
      scripts: {
        files: ['sass/**/*.scss'],
        tasks: ['sass']
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded',
          sourcemap: 'file'
        },
        files: {
          'css/styles.css': 'sass/styles.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('prefix', ['autoprefixer']);
  grunt.registerTask('default', ['sass', 'watch']);
}
