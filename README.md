
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


