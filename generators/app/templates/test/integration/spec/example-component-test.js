
describe('ExampleComponent', function() {

  it('should greet the world by default', function() {
    expect(<%= appInstanceName %>.exampleComponent.sayHello()).to.eql('Hello world');
  });

  it('should greet me', function() {
    expect(<%= appInstanceName %>.exampleComponent.sayHello('corey')).to.eql('Hello corey');
  });

});
