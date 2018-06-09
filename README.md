# grunt-java-jar

> generate a jar with provided manifest entries and list of files

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-java-jar --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-java-jar');
```

## The "java_jar" task

### Overview
In your project's Gruntfile, add a section named `java_jar` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  java_jar: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Create a Jar with Manifest Entries
We will provide manifest entries of the jar as a javascript object. The plugin will create a MANIFEST.MF file and call jar command to include this file as its MANIFEST

```js
grunt.initConfig({
  java_jar: {
      myjar: {
        destDir: 'dist/jar', //where the jar file is written
        jarName: 'myjar.jar', //name of the jar file
        dir: 'test/fixtures', //working directory where the jar command will run
        files: '.', //All files specified in the blob pattern using files option will be packed into the jar
        //provide the manifest entries as a javascript object with key value pairs. The MANIFEST file will contain
        manifestEntries: {
          Label: 'Myjar',
          Version: '1.0.1'
        }
      }
    },
});
```

#### Create a Jar without Manifest Entries
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  java_jar: {
      myjar: {
        destDir: 'dist/jar', 
        jarName: 'myjar.jar', 
        dir: 'test/fixtures', 
        files: '.'
      }
    }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
