/*global describe, before, it, beforeEach */
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var fs      = require('fs');
var test    = require('./helper.js');

describe('Angular-RequireJS generator route mechanism', function () {
  var route = 'simpleroute';
  this.angularRequire = {};

  var expected = [
    'app/scripts/controllers/' + route + '.js',
    'test/spec/controllers/' + route + 'Spec.js',
    'app/views/' + route + '.html'
  ];

  var genOptions = {
    'appPath': 'app',
    'skip-install': true,
    'skip-welcome-message': true,
    'skip-message': true
  };

  var mockPrompts = {
    compass: true,
    bootstrap: true,
    compassBootstrap: true,
    modules: ['routeModule']
  };

  var deps = [
    '../../app',
    '../../controller',
    '../../route',
    '../../view', [
      helpers.createDummyGenerator(),
      'karma-require:app'
    ]
  ];

  beforeEach(function (done) {
    this.angularRequire = {};

    this.angularRequire.app = helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(__dirname, 'tmp'), function () {
        var out = [
          '{',
          '  "generator-angular-require": {',
          '    "appPath": "app",',
          '    "appName": "App"',
          '  }',
          '}'
        ];
        fs.writeFileSync('.yo-rc.json', out.join('\n'));
      })
      .withArguments(['App'])
      .withOptions(genOptions)
      .withPrompts(mockPrompts)
      .withGenerators(deps);

    done();
  });

  describe('create routes', function () {
    it('should generate default route items', function(done) {
      this.angularRequire.app
        .on('end', function () {
          test.createSubGenerator(
            'route',
            [route],
            deps,
            genOptions,
            function() {
              assert.file(expected);

              assert.fileContent(
                'app/scripts/app.js',
                new RegExp('when\\(\'/' + route + '\'')
              );

              done();
            }
          );
        });
    });

    // Test with URI specified explicitly
    it('should generate route items with the route uri given', function(done) {
      var uri = 'segment1/segment2/:parameter';
      genOptions["uri"] = uri;

      this.angularRequire.app
        .on('end', function () {
          test.createSubGenerator(
            'route',
            [route],
            deps,
            genOptions,
            function() {
              assert.file(expected);

              assert.fileContent(
                'app/scripts/app.js',
                new RegExp('when\\(\'/' + uri + '\'')
              );

              done();
            }
          );
        });
    });
  });
});
