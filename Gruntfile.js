module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          // compile out scss
          // destination: source
          'build/styles/styles.css' : 'app/styles/styles.scss'
        },
        options: {
          style: 'expanded',
          debugInfo: true,
          sourcemap: true
        }
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          // this will concat the files
          // destination: [source files]
          'build/js/frontend.js': ['app/js/libraries/fake.js', 'app/js/script.js']
        }
      }
    },
    curl: {
      // if you cd into this projects and run php using $ php -S "0.0.0.0:8080", this will curl the file and create the html 
      // Short format (dest: src)
      'build/index.html': 'http://0.0.0.0:8080/app/php/index.php'
    },
    watch: {
      // putting "app/styles/" in front of all the wildcards prevents the "too many files" error on Apple
      css: {
        files: 'app/styles/**/*.scss',
        tasks: ['sass']
      },
      curl: {
        files: 'app/php/**/*.php',
        tasks: ['curl']
      },
      uglify: {
        files: 'app/js/**/*.js',
        tasks: ['uglify']
      }
    } 
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-curl');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);
}