
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
    webpack: require('./config/grunt-webpack')
  });

  grunt.registerTask('default', ['jscs', 'test:single', 'build']);
  grunt.registerTask('build', ['clean:dist', 'webpack', 'uglify']);
  grunt.registerTask('test:single', ['clean:build', 'mochaTest', 'karma:single', 'cat:coverageSummary']);
  grunt.registerTask('test:continuous', ['clean:build', 'karma:continuous']);

};
