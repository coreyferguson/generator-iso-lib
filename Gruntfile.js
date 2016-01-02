
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bump: require('./config/bump-grunt'),
    jscs: require('./config/jscs-grunt'),
    mochaTest: require('./config/mocha-grunt')
  });

  grunt.registerTask('default', ['jscs', 'mochaTest']);

};
