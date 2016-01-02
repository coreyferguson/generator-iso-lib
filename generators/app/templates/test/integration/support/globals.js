
// global dependencies
chai = require('chai');
chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
expect = chai.expect;
Promise = require('bluebird');

// jscs:disable
Function.prototype.bind=Function.prototype.bind||function(b){if(typeof this!=='function'){throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');}var a=Array.prototype.slice,f=a.call(arguments,1),e=this,c=function(){},d=function(){return e.apply(this instanceof c?this:b||window,f.concat(a.call(arguments)));};c.prototype=this.prototype;d.prototype=new c();return d;};
// jscs:enable

// Configure <%= appClassName %>, target perf environment
<%= appClassName %> = require('../../../src');
<%= appInstanceName %> = new <%= appClassName %>();
