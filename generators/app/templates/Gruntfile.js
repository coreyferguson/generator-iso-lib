
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bump: require('./config/bump-grunt'),
    cat: require('./config/cat-grunt'),
    clean: require('./config/clean-grunt'),
    jscs: require('./config/jscs-grunt'),
    jsdoc: require('./config/jsdoc-grunt'),
    karma: require('./config/karma-grunt'),
    mochaTest: require('./config/mocha-grunt'),
    uglify: require('./config/uglify-grunt'),
    webpack: require('./config/webpack-grunt')
  });

  grunt.registerTask('default', ['jscs', 'test:single', 'build']);
  grunt.registerTask('build', ['clean:dist', 'webpack', 'uglify']);
  grunt.registerTask('test:single', ['mochaTest', 'karma:single', 'cat:coverageSummary']);

};
