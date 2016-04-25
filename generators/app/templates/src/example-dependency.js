
'use strict';

/**
 * Example isomorphic-js dependency.
 */
class ExampleDependency {
  process(name) {
    return name.toLowerCase();
  }
}

module.exports = ExampleDependency;
