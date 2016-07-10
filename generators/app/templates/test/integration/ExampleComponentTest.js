
'use strict';

import <%= appClassName %> from '../../src';
import {expect} from '../support/TestUtils';

describe('ExampleComponent integration tests', () => {

  const <%= appInstanceName %> = new <%= appClassName %>();

  it('should greet the world by default', () => {
    return expect(<%= appInstanceName %>.exampleComponent.sayHello())
      .to.eventually.equal('Hello world');
  });

  it('should greet me', () => {
    return expect(<%= appInstanceName %>.exampleComponent.sayHello('COREY'))
      .to.eventually.equal('Hello corey');
  });

});
