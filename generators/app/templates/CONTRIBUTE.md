
# Contribute

## Install: First-time instructions

### Global dependencies

#### Node.js

Download and install [Node.js](https://nodejs.org).

#### Grunt

Install Grunt CLI:

```
npm install -g grunt-cli
```

#### Download <%= appClassName %> and install local dependencies:

**TODO: Update github link below**

```
git clone git@github.com:organization/<%= appName %>.git
cd <%= appName %>
npm install
```

## Build

Project built and tested by simply executing:

```
grunt
```

## Continuous Testing

Test suites can be run automatically as changes are made to the source or test scripts.

For continuous testing in the browser:

```
grunt testBrowser
```

For continuous testing in Node.js:

```
grunt testNode
```

> Continuous testing does not perform other build operations such as compiling
the `dist/*` bundles. Be sure to run a full `grunt` build before pushing to npm.
