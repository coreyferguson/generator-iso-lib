
/**
 * This is used only when executing tests against Node.js environment.
 * Karma will configure these items in browser environment automatically.
 */

var chai = require('chai');
expect = chai.expect;
assert = chai.assert;

var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);
