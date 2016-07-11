var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var path = require('path');

describe('app', function() {

  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        appName: 'iso-lib',
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
      'config/grunt/babel.js',
      'config/grunt/bump.js',
      'config/grunt/cat.js',
      'config/grunt/clean.js',
      'config/grunt/jscs.js',
      'config/grunt/jsdoc.js',
      'config/grunt/karma.js',
      'config/grunt/mochaTest.js',
      'config/grunt/uglify.js',
      'config/grunt/watch.js',
      'config/grunt/webpack.js',
      'config/karma.js',
      'config/mocha.js',
      'config/webpack.js',
      'src/index.js',
      'src/IsoLib.js',
      'src/ExampleComponent.js',
      'src/ExampleDependency.js',
      'test/integration/ExampleComponentTest.js',
      'test/unit/ExampleComponentTest.js',
      'test/unit/ExampleDependencyTest.js',
      'test/support/TestUtils.js',
      'dist/README.md'
    ]);
  });

});
