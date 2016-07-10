
var path = require('path');

module.exports = function(grunt) {

  // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
  require('load-grunt-tasks')(grunt);

  // load all grunt configurations matching 'config/grunt/**.js'
  require('load-grunt-config')(grunt, {
    configPath: path.join(__dirname, 'config/grunt'),
  });

  // test and build distribution files
  grunt.registerTask('default', ['jscs', 'test', 'dist']);

  // test on node and browser and report coverage
  grunt.registerTask('test', [
    'testNodeSingle',
    'testBrowserSingle',
    'cat:coverageSummary'
  ]);

  // test once on node
  grunt.registerTask('testNodeSingle', ['clean:build', 'babel', 'mochaTest']);

  // test once on browser
  grunt.registerTask('testBrowserSingle', ['karma:single']);

  // test continuously with browser
  grunt.registerTask('testBrowser', ['clean:build', 'karma:continuous']);

  // test continuously with node.js
  grunt.registerTask('testNode', ['clean:build', 'watch']);

  // build distribution files
  grunt.registerTask('dist', ['clean:dist', 'webpack', 'uglify']);

};
