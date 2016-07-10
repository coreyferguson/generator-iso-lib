
'use strict';

import ExampleComponent from '../../src/ExampleComponent';
import {expect, sinon} from '../support/TestUtils';

describe('ExampleComponent unit tests', () => {

  const sandbox = sinon.sandbox.create();

  afterEach(() => {
    sandbox.restore();
  });

  it('should process name', () => {
    const exampleComponent = new ExampleComponent();
    const stub = sandbox
      .stub(exampleComponent._exampleDependency, 'process')
      .returns('processed');
    return expect(exampleComponent.sayHello('not processed').then(response => {
      return Promise.all([
        expect(response).to.equal('Hello processed'),
        expect(stub).to.have.been.calledWith('not processed')
      ]);
    }));
  });

});
