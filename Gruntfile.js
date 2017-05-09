module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: ["assets/sass/style.scss"],
        tasks: ["sass"],
        options: {
          nospawn: true
        }
      }
    },
    sass: {
      dist: {
        files: {
          'assets/css/style.css': 'assets/sass/style.scss'
        }
      }
    },
    compress: {
      main: {
        options: {
          archive: 'mnml.zip'
        },
        files: [
          { src: ['./*.hbs'], dest: '/', filter: 'isFile' },
          { src: ['./assets/**'], dest: '/' },
          { src: ['./partials/**'], dest: '/' },
        ]
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: false,
            src: 'node_modules/highlightjs/highlight.pack.min.js',
            dest: 'assets/js/highlight.pack.min.js'
          },
          {
            expand: true,
            flatten: true,
            src: 'node_modules/highlightjs/styles/*.css',
            dest: 'assets/css/highlightjs'
          },
          {
            expand: false,
            src: 'node_modules/normalize.css/normalize.css',
            dest: 'assets/css/normalize.css'
          },
          {
            expand: true,
            flatten: true,
            src: 'node_modules/font-awesome/fonts/*',
            dest: 'assets/fonts/font-awesome/'
          },
          {
            expand: false,
            src: 'node_modules/katex/dist/katex.min.js',
            dest: 'assets/js/katex.min.js'
          },
          {
            expand: false,
            src: 'node_modules/katex/dist/katex.min.css',
            dest: 'assets/css/katex.min.css'
          },
          {
            expand: true,
            flatten: true,
            src: 'node_modules/katex/dist/fonts/*',
            dest: 'assets/css/fonts/'
          },
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["watch"]);
};
