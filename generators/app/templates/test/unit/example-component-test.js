
'use strict';

let ExampleComponent = require('../../src/example-component');

describe('ExampleComponent unit tests', function() {

  it('should process name', function() {
    let exampleComponent = new ExampleComponent();
    let process = sinon.stub().returns('processed');
    exampleComponent._exampleDependency.process = process;
    return expect(exampleComponent.sayHello('not processed').then(function(response) {
      return Promise.all([
        expect(response).to.equal('Hello processed'),
        expect(process).to.have.been.calledWith('not processed')
      ]);
    }));
  });

});
