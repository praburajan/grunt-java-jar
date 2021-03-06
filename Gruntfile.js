/*
 * grunt-java-jar
 * https://github.com/praburajan/grunt-java-jar
 *
 * Copyright (c) 2018 Prabu Rajan
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp', 'MANIFEST']
    },

    // Configuration to be run (and then tested).
    java_jar: {
      myjar: {
        destDir: 'dist/jar',
        jarName: 'myjar.jar',
        dir: 'test/fixtures',
        files: '.',
        manifest: {
          name: 'MANIFEST',
          entries: {
            Label: 'UISNIP_GENERIC_180606.1100.0001',
            Commit: 'develop-abcdefgh'
          }
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'java_jar', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', 'java_jar');

};
