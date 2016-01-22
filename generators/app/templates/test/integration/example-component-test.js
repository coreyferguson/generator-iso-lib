
describe('ExampleComponent integration tests', function() {

  it('should greet the world by default', function() {
    return expect(<%= appInstanceName %>.exampleComponent.sayHello()).to.eventually.equal('Hello world');
  });

  it('should greet me', function() {
    return expect(<%= appInstanceName %>.exampleComponent.sayHello('COREY')).to.eventually.equal('Hello corey');
  });

});
