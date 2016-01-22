var ExampleDependency = require('../../src/example-dependency');

describe('ExampleDependency unit tests', function() {

  it('should process name', function() {
    var exampleDependency = new ExampleDependency();
    expect(exampleDependency.process('COREY')).to.equal('corey');
  });

});
