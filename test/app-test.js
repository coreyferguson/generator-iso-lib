var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var path = require('path');

describe('app', function() {

  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        appName: 'iso-js',
        appDescription: 'Isomorphic JavaScript library.',
        authorName: 'Corey Ferguson',
        authorEmail: 'corey.t.ferguson@gmail.com'
      })
      .on('end', done);
  });

  it('should copy required files', function() {
    assert.file([
      'package.json',
      'Gruntfile.js',
      'README.md',
      'CONTRIBUTE.md',
      '.gitignore',
      '.jscsrc',
      'config/bump-grunt.js',
      'config/cat-grunt.js',
      'config/clean-grunt.js',
      'config/jscs-grunt.js',
      'config/jsdoc-grunt.js',
      'config/karma-continuous.js',
      'config/karma-single.js',
      'config/karma.js',
      'config/karma-grunt.js',
      'config/mocha-grunt.js',
      'config/mocha-options.js',
      'config/uglify-grunt.js',
      'config/webpack-grunt.js',
      'src/index.js',
      'src/example-component.js',
      'src/example-dependency.js',
      'test/support/globals.js',
      'test/integration/example-component-test.js',
      'test/unit/example-component-test.js',
      'test/unit/example-dependency-test.js',
      'dist/README.md'
    ]);
  });

});
