
var chai = require('chai');
expect = chai.expect;
assert = chai.assert;

var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);
