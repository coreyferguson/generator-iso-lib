
'use strict';

/**
 * @class ExampleDependency
 * @description
 * Example isomorphic-js dependency.
 */
export default class ExampleDependency {

  /**
   * Process the given name into lowercase letters.
   * @param {String} name Name to be processed.
   */
  process(name) {
    return name.toLowerCase();
  }

}
