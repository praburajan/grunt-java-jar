/*
 * grunt-java-jar
 * https://github.com/praburajan/grunt-java-jar
 *
 * Copyright (c) 2018 Prabu Rajan
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('java_jar', 'generate a jar with provided manifest entries and list of files', function() {
    var options = this.data;
    var jarConfig = {
        command: 'jar',
        jarName: 'MANIFEST',
        jarOptions : 'cvfm',
        manifestName: options.destDir + '/' + options.jarName,
        dir: options.dir,
        files: options.files
    };
    if(!options.manifestEntries || Object.keys(options.manifestEntries).length === 0) {
      delete jarConfig.jarName;
      jarConfig.jarOptions = 'cvf';
    }
    grunt.loadNpmTasks('grunt-run-java');
    try {
      //write manifest entries to file
      var manifest = '';
      var person = {
        name: 'prabu',
        last: 'rajan',
        age: 40
      }
      //grunt.log.writeflags(options.manifestEntries, 'Manifest entries ==== ');
      if(options.manifestEntries && Object.keys(options.manifestEntries).length > 0) {
        Object.keys(options.manifestEntries).forEach(function(prop) {
          manifest = manifest + prop + ':' + ' ' + options.manifestEntries[prop] + '\n';
        });
        grunt.file.write('MANIFEST', manifest);
      }

      grunt.config.merge({
        run_java: {
          generate_jar: jarConfig
        }
      });

      grunt.task.run('run_java:generate_jar');
    }
    catch(error) {
      grunt.log.error(error);
      grunt.fail.warn("Error writing manifest file", 3);
    }
  });
};
