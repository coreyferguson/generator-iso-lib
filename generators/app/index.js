
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
      default: 'test-iso-lib',
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
    this.fs.move(this.destinationPath('src/IsoLib.js'), this.destinationPath('src/' + model.appClassName + '.js'))
  },

  /**
   * #7 in Yeoman run context.
   * Install grunt dependencies.
   */
  install: function() {

    // Save dependencies
    this.npmInstall([
      'platform@^1.3.1'
    ], {
      save: true
    });

    // Save developer dependencies
    this.npmInstall([
      'babel-core@^6.10.4',
      'babel-loader@^6.2.4',
      'babel-preset-es2015@^6.9.0',
      'chai@^3.5.0',
      'chai-as-promised@^5.3.0',
      'grunt@^1.0.1',
      'grunt-babel@^6.0.0',
      'grunt-bump@^0.8.0',
      'grunt-cat@^0.1.2',
      'grunt-contrib-clean@^1.0.0',
      'grunt-contrib-uglify@^1.0.1',
      'grunt-contrib-watch@^1.0.0',
      'grunt-jscs@^3.0.1',
      'grunt-jsdoc@^2.1.0',
      'grunt-karma@^2.0.0',
      'grunt-mocha-test@^0.12.7',
      'grunt-sizediff@^1.2.0',
      'grunt-webpack@^1.0.11',
      'isparta-loader@^2.0.0',
      'istanbul-instrumenter-loader@^0.2.0',
      'karma@^0.13.22',
      'karma-chrome-launcher@^1.0.1',
      'karma-coverage@^1.1.0',
      'karma-mocha@^1.1.1',
      'karma-sourcemap-loader@^0.3.7',
      'karma-webpack@^1.7.0',
      'load-grunt-config@^0.19.2',
      'load-grunt-tasks@^3.5.0',
      'lodash.merge@^4.4.0',
      'mocha@^2.5.3',
      'sinon@^1.17.4',
      'sinon-chai@^2.8.0',
      'webpack@^1.13.1',
      'webpack-dev-server@^1.14.1'
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
