
/**
 * @class
 * @constructor
 * @description Example isomorphic-js component.
 *
 * @example
 * var <%= appClassName %> = require('<%= appName %>');
 * var <%= appInstanceName %> = new <%= appClassName %>();
 * console.log( <%= appInstanceName %>.exampleComponent.sayHello() );
 */
function ExampleComponent() {
}

/**
 * Returns a greeting message.
 * @param {string} [name=world] Name to use in greeting.
 * @returns {string} Greeting message.
 *
 * @example
 * console.log( <%= appInstanceName %>.exampleComponent.sayHello() );
 */
ExampleComponent.prototype.sayHello = function(name) {
  if (!name) name = 'world';
  return 'Hello ' + name;
};

module.exports = ExampleComponent;
