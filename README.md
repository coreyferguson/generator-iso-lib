
# Iso-Lib, Yeoman Generator

## Usage

```bash
npm install -g yo generator-iso-lib
yo iso-lib
```

## Features

- Isomorphic (runs in browser and Node.js).
- Bundled into a single dependency for browser.
- Integration testing on Node.js and browser.
- Code coverage.
- Version controlled with grunt bump.
- API Documentation with JSDoc.
- JavaScript style enforcement with JSCS.

## Technologies

As a consumer: ( [`dependencies`][] )

- [superagent](https://www.npmjs.com/package/superagent)
- [bluebird](https://www.npmjs.com/package/bluebird)
- [platform](https://www.npmjs.com/package/platform)

As a contributor ( [`devDependencies`][] )

- [Grunt](https://www.npmjs.com/package/grunt)
- [Webpack](https://www.npmjs.com/package/webpack)
- [Karma](https://www.npmjs.com/package/karma)
- [Mocha](https://www.npmjs.com/package/mocha)
- [Chai](https://www.npmjs.com/package/chai)
- [chai-as-promised](https://www.npmjs.com/package/chai-as-promised)
- [istanbul](https://www.npmjs.com/package/istanbul-instrumenter-loader)
- [grunt-bump](https://www.npmjs.com/package/grunt-bump)
- [JSCS](https://www.npmjs.com/package/jscs)
- [JSDoc](https://www.npmjs.com/package/jsdoc)

[`dependencies`]: https://docs.npmjs.com/files/package.json#dependencies
[`devDependencies`]: https://docs.npmjs.com/files/package.json#devdependencies

## Project structure

```
$ tree
├── api
│   └── index.html             // generated api from JSDocs
├── config                     // configuration files
│   ├── grunt-bump.js
│   ├── grunt-cat.js
│   ├── grunt-clean.js
│   ├── grunt-jscs.js
│   ├── grunt-jsdoc.js
│   ├── grunt-karma.js
│   ├── grunt-mocha.js
│   ├── grunt-uglify.js
│   ├── grunt-webpack.js
│   ├── karma.js
│   ├── mocha.js
│   └── webpack.js
├── CONTRIBUTE.md              // how-to contribute to this library
├── coverage                   // testing code coverage
│   ├── coverage-detail.txt
│   ├── coverage-html
│   │   └── index.html
│   └── coverage-summary.txt
├── dist                       // distribution files for browser
│   └── README.md
├── Gruntfile.js               // build configuration with `grunt`
├── package.json               // npm details and dependencies
├── README.md                  // how-to use this library as a consumer
├── src
│   ├── example-component.js   // example component
│   └── index.js               // single-point-of-entry into library
└── test
    ├── integration
    │   └── example-component-test.js // example integration test
    ├── support
    │   └── globals-mocha.js
    └── unit
        ├── example-component-test.js // example unit test with mocking
        └── example-dependency-test.js // example unit test
```


