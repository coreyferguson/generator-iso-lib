
'use strict';

let ExampleComponent = require('./example-component');

/**
 * <%= appDescription %>
 *
 * @example
 * var <%= appClassName %> = require('<%= npmName %>');
 * var <%= appInstanceName %> = new <%= appClassName %>();
 */
class <%= appClassName %> {

  constructor() {
    /**
     * @instance
     * @type {ExampleComponent}
     */
    this.exampleComponent = new ExampleComponent();
  }

}

module.exports = <%= appClassName %>;
