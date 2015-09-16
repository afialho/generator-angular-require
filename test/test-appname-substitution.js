/*global describe, before, it, beforeEach */
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var fs      = require('fs');

describe('Angular-RequireJS generator template mechanism', function () {
  var appName = 'upperCaseBug';

  beforeEach(function (done) {
    var deps = [
      '../../app',
      '../../controller',
      [
        helpers.createDummyGenerator(),
        'karma-require:app'
      ]
    ];

    this.angularRequire = {};

    this.angularRequire.app = helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(__dirname, 'tmp'), function () {
        var out = [
          '{',
          '  "generator-angular-require": {',
          '    "appPath": "app",',
          '    "appName": "' + appName + '"',
          '  }',
          '}'
        ];
        fs.writeFileSync('.yo-rc.json', out.join('\n'));
      })
      .withArguments([appName])
      .withOptions({
        'appPath': 'app',
        'skip-welcome-message': true,
        'skip-install': true,
        'skip-message': true
      })
      .withPrompt({
        compass: true,
        bootstrap: true,
        compassBootstrap: true,
        modules: []
      })
      .withGenerators(deps);

    done();
  });

  it('should generate the same appName in every file', function (done) {
    this.angularRequire.app
      .on('end', function () {
        assert.file([
          'app/scripts/app.js',
          'app/scripts/controllers/main.js',
          'app/index.html',
          'test/spec/controllers/mainSpec.js'
        ]);

        assert.fileContent(
          'app/scripts/app.js',
          new RegExp('module\\(\'' + appName + 'App\'')
        );

        assert.fileContent(
          'app/scripts/controllers/main.js',
          new RegExp('module\\(\'' + appName + 'App.controllers.MainCtrl\'')
        );

        assert.fileContent(
          'test/spec/controllers/mainSpec.js',
          new RegExp('module\\(\'' + appName + 'App.controllers.MainCtrl\'')
        );

        assert.fileContent(
          'app/index.html',
          new RegExp('ng-app=\"' + appName + 'App\"')
        );

        done();
      });
  });
});
