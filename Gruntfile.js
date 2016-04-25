
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bump: require('./config/grunt-bump'),
    jscs: require('./config/grunt-jscs'),
    mochaTest: require('./config/grunt-mocha')
  });

  grunt.registerTask('default', ['jscs', 'mochaTest']);

};
