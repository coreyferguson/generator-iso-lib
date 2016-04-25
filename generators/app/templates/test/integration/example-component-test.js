
'use strict';

let <%= appClassName %> = require('../../src');

describe('ExampleComponent integration tests', function() {

  let <%= appInstanceName %>;

  before(() => {
    <%= appInstanceName %> = new <%= appClassName %>();
  });

  it('should greet the world by default', function() {
    return expect(<%= appInstanceName %>.exampleComponent.sayHello()).to.eventually.equal('Hello world');
  });

  it('should greet me', function() {
    return expect(<%= appInstanceName %>.exampleComponent.sayHello('COREY')).to.eventually.equal('Hello corey');
  });

});
