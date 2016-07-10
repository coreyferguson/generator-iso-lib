
# <%= appClassName %>

## Summary

<%= appDescription %>

## Consumer Usage

### Node.js

Install to your project using npm:

```
npm install <%= npmName %> --save-dev
```

Use it:

**TODO: Document example usage below**

```javascript
var <%= appClassName %> = require('<%= npmName %>');
var <%= appInstanceName %> = new <%= appClassName %>();

// TODO: Document example usage
// ...
```

### Browser

Distribution files are provided for different [library targets](https://webpack.github.io/docs/configuration.html#output-librarytarget).

- `./dist/<%= appName %>-amd.js` & `./dist/<%= appName %>-amd.min.js`: For AMD libraries like [RequireJS](http://requirejs.org/). `define(...)`.
- `./dist/<%= appName %>-this.js` & `./dist/<%= appName %>-this.min.js`: Uses global context. `window.<%= appClassName %> = ...`

## API

**TODO: Update API Documentation.** Run `grunt jsdoc` to generate api docs. Publish to site such as github pages and link below.

See [API Documentation]().

## Contributor Usage

See [Contribution Documentation](./CONTRIBUTE.md).
