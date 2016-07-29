
# Iso-Lib, Yeoman Generator

## Usage

```bash
npm install -g yo generator-iso-lib
yo iso-lib
```

## Features

- Universal / Isomorphic (runs in browser and Node.js).
- Bundled into a single dependency for browser.
- Integration testing on Node.js and browser.
- Code coverage.
- Version controlled with grunt bump.
- API Documentation with JSDoc.
- JavaScript style enforcement with JSCS.

## Technologies

As a consumer: ( [`dependencies`][] )

- [platform](https://www.npmjs.com/package/platform)

Add any other dependencies you need. Be sure to test it against Node.js
and browser environments.

As a contributor ( [`devDependencies`][] )

- [Grunt](http://gruntjs.com)
- [Webpack](http://webpack.github.io/docs/what-is-webpack.html)
- [Babel](https://babeljs.io)
- [Karma](https://karma-runner.github.io/0.13/intro/how-it-works.html)
- [Mocha](https://mochajs.org)
- [Chai](http://chaijs.com)
- [chai-as-promised](https://github.com/domenic/chai-as-promised)
- [istanbul](https://github.com/gotwarlost/istanbul)
- [grunt-bump](https://github.com/vojtajina/grunt-bump)
- [JSCS](http://jscs.info)
- [JSDoc](http://usejsdoc.org)

[`dependencies`]: https://docs.npmjs.com/files/package.json#dependencies
[`devDependencies`]: https://docs.npmjs.com/files/package.json#devdependencies

## Project structure

### Documentation

```
├── CONTRIBUTE.md  // how-to contribute to this library
├── README.md      // how-to use this library as a consumer
└── api
    └── index.html // generated api from JSDocs
```

### Source

```
├── src
│   ├── ExampleComponent.js  // example component
│   ├── ExampleDependency.js // example dependency to show test mocking
│   └── YourLibraryName.js   // single-point-of-entry into library
├── Gruntfile.js             // build configuration with `grunt`
├── package.json             // npm details and dependencies
└── config                   // configuration files
    ├── grunt
    │   ├── babel.js
    │   ├── bump.js
    │   ├── cat.js
    │   ├── clean.js
    │   ├── jscs.js
    │   ├── jsdoc.js
    │   ├── karma.js
    │   ├── mochaTest.js
    │   ├── uglify.js
    │   ├── watch.js
    │   └── webpack.js
    ├── karma.js
    ├── mocha.js
    └── webpack.js
```

### Testing

```
├── test
│   ├── integration
│   │   └── ExampleComponentTest.js   // example integration test
│   ├── support
│   │   └── TestUtils.js              // exports `expect` and `sinon`
│   └── unit
│       ├── ExampleComponentTest.js   // example unit test with mocking
│       └── ExampleDependencyTest.js  // example unit test
└── coverage // testing code coverage
    ├── coverage-detail.txt
    ├── coverage-html
    │   └── index.html
    └── coverage-summary.txt
```

### Distribution

```
└── dist // distribution files published to npm
    ├── your-library-name-amd.js
    ├── your-library-name-amd.min.js
    ├── your-library-name-commonjs2.js
    ├── your-library-name-commonjs2.min.js
    ├── your-library-name-this.js
    └── your-library-name-this.min.js
```

## Examples

Examples of provider and consumers can be seen [here](https://github.com/coreyferguson/example-iso-js).
