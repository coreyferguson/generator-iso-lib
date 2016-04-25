
'use strict';

let ExampleDependency = require('../../src/example-dependency');

describe('ExampleDependency unit tests', function() {

  it('should process name', function() {
    let exampleDependency = new ExampleDependency();
    expect(exampleDependency.process('COREY')).to.equal('corey');
  });

});
