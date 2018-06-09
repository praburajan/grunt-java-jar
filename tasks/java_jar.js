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
        execOptions: {
          maxBuffer: Infinity
        },
        jarName: options.manifest && options.manifest.name ? options.manifest.name : 'MANIFEST',
        jarOptions : 'cvfm',
        manifestName: options.destDir + '/' + options.jarName,
        dir: options.dir,
        files: options.files
    };
    if(!options.manifest || (options.manifest && options.manifest.entries && Object.keys(options.manifest.entries).length === 0)) {
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
      
      if(options.manifest && options.manifest.entries && Object.keys(options.manifest.entries).length > 0) {
        grunt.log.writeflags(options.manifest.entries, 'Manifest entries ==== ');
        var mfileName = options.manifest.name || 'MANIFEST';
        Object.keys(options.manifest.entries).forEach(function(prop) {
          manifest = manifest + prop + ':' + ' ' + options.manifest.entries[prop] + '\n';
        });
        grunt.file.write(mfileName, manifest);
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
      grunt.fail.warn("Error creating jar file", 3);
    }
  });
};
