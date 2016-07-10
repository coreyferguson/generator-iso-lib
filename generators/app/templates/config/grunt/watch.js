
module.exports = {
  dev: {
    files: ['src/**/*.js', 'test/**/*.js'],
    tasks: ['jscs', 'testNodeSingle'],
    options: {
      atBegin: true
    }
  }
};
