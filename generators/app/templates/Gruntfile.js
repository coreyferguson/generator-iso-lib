
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bump: require('./config/grunt-bump'),
    cat: require('./config/grunt-cat'),
    clean: require('./config/grunt-clean'),
    jscs: require('./config/grunt-jscs'),
    jsdoc: require('./config/grunt-jsdoc'),
    karma: require('./config/grunt-karma'),
    mochaTest: require('./config/grunt-mocha'),
    uglify: require('./config/grunt-uglify'),
    watch: require('./config/grunt-watch'),
    webpack: require('./config/grunt-webpack')
  });

  // test and build
  grunt.registerTask('default', ['jscs', 'test:single', 'build']);

  // build distribution files
  grunt.registerTask('build', ['clean:dist', 'webpack', 'uglify']);

  // test once against browser
  grunt.registerTask('test', [
    'clean:build',
    'mochaTest',
    'karma:single',
    'cat:coverageSummary'
  ]);

  // test continuously with browser
  grunt.registerTask('test:browser', ['clean:build', 'karma:continuous']);

  // test continuously with node.js
  grunt.registerTask('test:node', ['clean:build', 'watch']);

};
