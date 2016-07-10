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
      'config/grunt-bump.js',
      'config/grunt-cat.js',
      'config/grunt-clean.js',
      'config/grunt-jscs.js',
      'config/grunt-jsdoc.js',
      'config/grunt-karma.js',
      'config/grunt-mocha.js',
      'config/grunt-uglify.js',
      'config/grunt-webpack.js',
      'config/karma.js',
      'config/mocha.js',
      'config/webpack.js',
      'src/index.js',
      'src/example-component.js',
      'src/example-dependency.js',
      'test/integration/example-component-test.js',
      'test/unit/example-component-test.js',
      'test/unit/example-dependency-test.js',
      'dist/README.md'
    ]);
  });

});
