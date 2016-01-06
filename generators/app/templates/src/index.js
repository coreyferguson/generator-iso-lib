
var ExampleComponent = require('./example-component');

/**
 * @class <%= appClassName %>
 * @constructor
 * @description
 * <%= appDescription %>
 *
 * @example
 * var <%= appClassName %> = require('<%= npmName %>');
 * var <%= appInstanceName %> = new <%= appClassName %>();
 */
function <%= appClassName %>() {

  /**
   * @instance
   * @type {ExampleComponent}
   */
  this.exampleComponent = new ExampleComponent();

}

module.exports = <%= appClassName %>;
