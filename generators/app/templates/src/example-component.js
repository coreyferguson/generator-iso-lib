
'use strict';

let Promise = require('bluebird');
let ExampleDependency = require('./example-dependency');

/**
 * Example isomorphic-js component.
 *
 * @example
 * var <%= appClassName %> = require('<%= npmName %>');
 * var <%= appInstanceName %> = new <%= appClassName %>();
 * <%= appInstanceName %>.exampleComponent.sayHello().then(function(response) {
 *   console.log(response);
 * });
 */
class ExampleComponent {

  constructor() {
    this._exampleDependency = new ExampleDependency();
  }

  /**
   * Returns a greeting message.
   * @param {string} [name=world] Name to use in greeting.
   * @returns {Promise.<string>} Greeting message.
   */
  sayHello(name) {
    if (!name) name = 'world';
    name = this._exampleDependency.process(name);
    return Promise.resolve('Hello ' + name);
  }

}

module.exports = ExampleComponent;
