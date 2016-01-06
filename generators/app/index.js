
var generators = require('yeoman-generator');
var s = require('underscore.string');

/**
 * Base generator functionality.
 *
 * Methods executed according to yeoman run context:
 *   http://yeoman.io/authoring/running-context.html
 */
module.exports = generators.Base.extend({

  /**
   * TODO
   */
  constructor: function() {
    generators.Base.apply(this, arguments);
  },

  /**
   * #2 in Yeoman run context.
   * Retrieve customization options from user.
   * https://github.com/SBoudrias/Inquirer.js
   */
  prompting: function() {
    var done = this.async();
    this.prompt([{
      type: 'input',
      name: 'appName',
      message: 'Your library name:',
      default: 'test-iso-js',
      store: false,
      validate: function(input) {
        if (input !== null && input !== undefined &&
            input.match(/^[\w-]+$/)) {
          return true;
        } else {
          return 'Name must only use lowercase letters, numbers and dashes: ^[a-z\-\d]+$';
        }
      }
    }, {
      type: 'input',
      name: 'appDescription',
      message: 'Short description:',
      default: 'Isomorphic JavaScript Library.',
      store: false,
      validate: function(input) {
        if (input !== null && input !== undefined && input !== '') return true;
        else return 'Description cannot be null or empty.';
      }
    }, {
      type: 'confirm',
      name: 'isNpmSameAsAppName',
      message: 'Is the name in NPM registry the same as the app name?',
      default: true,
      store: false
    }, {
      type: 'input',
      name: 'npmName',
      message: 'Your preferred NPM module name:',
      store: false,
      when: function(answers) {
        return !answers.isNpmSameAsAppName;
      },
      validate: function(input) {
        if (input !== null && input !== undefined &&
            input.match(/^[\/\@\w-]+$/)) {
          return true;
        } else {
          return 'Name must only use lowercase letters, numbers and dashes: ^[a-z\-\d]+$';
        }
      }
    }, {
      type: 'input',
      name: 'authorName',
      message: 'Author name:',
      store: true,
      validate: function(input) {
        if (input !== null && input !== undefined && input !== '') return true;
        else return 'Author name cannot be null or empty.';
      }
    }, {
      type: 'input',
      name: 'authorEmail',
      message: 'Author email:',
      store: true,
      validate: function(input) {
        if (input !== null && input !== undefined && input !== '') return true;
        else return 'Author email cannot be null or empty.';
      }
    }], function(answers) {
      this.appName = answers.appName;
      this.appDescription = answers.appDescription;
      this.npmName = answers.npmName;
      this.authorName = answers.authorName;
      this.authorEmail = answers.authorEmail;
      done();
    }.bind(this));
  },

  /**
   * #3 in Yeoman run context.
   * Configure generator.
   */
  configuring: function() {
    // create project in new folder with chosen appName
    this.destinationRoot(this.appName);
  },

  /**
   * #5 in Yeoman run context.
   * Write templates to destination.
   */
  writing: function() {
    var model = this._generateTemplateModel();
    this.fs.copyTpl(this.templatePath('**/*'), this.destinationPath(), model);
    this.fs.move(this.destinationPath('_dot_gitignore'), this.destinationPath('.gitignore'));
    this.fs.move(this.destinationPath('_dot_jscsrc'), this.destinationPath('.jscsrc'));
  },

  /**
   * #7 in Yeoman run context.
   * Install grunt dependencies.
   */
  install: function() {

    // Save dependencies
    this.npmInstall([
      'bluebird',
      'platform',
      'superagent'
    ], {
      save: true
    });

    // Save developer dependencies
    this.npmInstall([
      'chai',
      'chai-as-promised',
      'grunt',
      'grunt-bump',
      'grunt-cat',
      'grunt-contrib-clean',
      'grunt-contrib-uglify',
      'grunt-jscs',
      'grunt-jsdoc',
      'grunt-karma',
      'grunt-mocha-test',
      'grunt-sizediff',
      'grunt-webpack',
      'istanbul-instrumenter-loader',
      'karma',
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
      'load-grunt-tasks',
      'lodash.merge',
      'mocha',
      'webpack',
      'webpack-dev-server'
    ], {
      saveDev: true
    });

  },

  /**
   * Creates a model object passed into all templates.
   */
  _generateTemplateModel: function() {
    return {
      appName: this.appName,
      appClassName: s.classify(this.appName),
      appInstanceName: s.camelize(this.appName),
      appDescription: this.appDescription,
      npmName: this.npmName || this.appName,
      authorName: this.authorName,
      authorEmail: this.authorEmail
    };
  }

});
