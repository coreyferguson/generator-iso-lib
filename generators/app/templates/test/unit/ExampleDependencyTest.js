
'use strict';

import ExampleDependency from '../../src/ExampleDependency';
import {expect, sinon} from '../support/TestUtils';

describe('ExampleDependency unit tests', () => {

  it('should process name', () => {
    const exampleDependency = new ExampleDependency();
    expect(exampleDependency.process('COREY')).to.equal('corey');
  });

});
