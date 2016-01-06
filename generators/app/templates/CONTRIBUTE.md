
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

Test suites can be run automatically as changes are made to the source or test scripts. This can be executed with the `test:continuous` grunt task:

```
grunt test:continuous
```

Continuous testing does not perform other build operations such as compiling the `dist/*` bundles. Be sure to run a full `grunt` build before pushing to git.
