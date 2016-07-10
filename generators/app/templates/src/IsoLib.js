
'use strict';

import ExampleComponent from './ExampleComponent';

/**
 * <%= appDescription %>
 *
 * @example
 * var <%= appClassName %> = require('<%= npmName %>');
 * var <%= appInstanceName %> = new <%= appClassName %>();
 */
export default class <%= appClassName %> {

  constructor() {
    /**
     * @instance
     * @type {ExampleComponent}
     */
    this.exampleComponent = new ExampleComponent();
  }

}
