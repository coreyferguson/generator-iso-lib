
// convert ES6 `default export` to ES5 CommonJS
const <%= appClassName %> = require('./<%= appClassName %>');
module.exports = <%= appClassName %>.default;
