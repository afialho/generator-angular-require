/*global describe, before, it, beforeEach */
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var fs      = require('fs');
var test    = require('./helper');
var _       = require('underscore.string');

describe('Angular-RequireJS generator appPath option', function () {
  var appPath = 'app';
  var appName = 'App';
  var expected = [
    'app/.htaccess',
    'app/404.html',
    'app/favicon.ico',
    'app/robots.txt',
    'app/styles/main.scss',
    'app/views/main.html',
    'app/index.html',
    '.bowerrc',
    '.editorconfig',
    '.gitignore',
    '.jshintrc',
    'Gruntfile.js',
    'package.json',
    'bower.json',
    'app/index.html',
    'bower.json'
  ];
  var mockPrompts = {
    compass: true,
    bootstrap: true,
    compassBootstrap: true,
    modules: []
  };
  var genOptions = {
    'appPath': appPath,
    'skip-install': true,
    'skip-welcome-message': true,
    'skip-message': true
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
          '    "appName": "' + appName + '"',
          '  }',
          '}'
        ];
        fs.writeFileSync('.yo-rc.json', out.join('\n'));
      })
      .withArguments([appName])
      .withOptions(genOptions)
      .withPrompts(mockPrompts)
      .withGenerators(deps);

    done();
  });

  describe('App files', function () {
    it('should generate dotfiles for apppath', function (done) {
      this.angularRequire.app
        .on('end', function() {
          assert.file(expected);
          done();
        });
    });

    it('creates expected JS files', function (done) {
      this.angularRequire.app
        .on('end', function() {
          assert.file([].concat(expected, [
            'app/scripts/app.js',
            'app/scripts/controllers/main.js',
            'test/spec/controllers/mainSpec.js'
          ]));
          done();
        });
    });
  });

  describe('Service Subgenerators', function () {
    var subGeneratorTest = function(generatorType, name, targetDirectory, suffix, applyFn, specType, done) {
      test.createSubGenerator(
        generatorType,
        [name],
        [
          '../../' + generatorType,
          [
            helpers.createDummyGenerator(),
            'karma-require:app'
          ]
        ],
        [],
        function() {
          assert.fileContent([
            [
              path.join('app/scripts', targetDirectory, name + '.js'),
              new RegExp(generatorType + '\\(\'' + applyFn(name) + suffix + '\'', 'g')
            ],
            [
              path.join('test/spec', targetDirectory, name + 'Spec.js'),
              new RegExp('describe\\(\'' + _.classify(specType) + ': ' + applyFn(name) + suffix + '\'', 'g')
            ]
          ]);

          done();
        }
      );
    };

    it('should generate a new controller', function (done) {
      this.angularRequire.app
        .on('end', function () {
          subGeneratorTest('controller', 'foo', 'controllers', 'Ctrl', _.classify, 'controller', done);
        });
    });

    it('should generate a new directive', function (done) {
      this.angularRequire.app
        .on('end', function () {
          subGeneratorTest('directive', 'foo', 'directives', '', _.camelize, 'directive', done);
        });
    });

    it('should generate a new filter', function (done) {
      this.angularRequire.app
        .on('end', function () {
          subGeneratorTest('filter', 'foo', 'filters', '', _.camelize, 'filter', done);
        });
    });

    ['constant', 'factory', 'provider', 'value'].forEach(function(t) {
      it('should generate a new ' + t, function (done) {
        this.angularRequire.app
          .on('end', function () {
            subGeneratorTest(t, 'foo', 'services', '', _.camelize, 'service', done);
          });
      });
    });

    it('should generate a new service', function (done) {
      this.angularRequire.app
        .on('end', function () {
          subGeneratorTest('service', 'foo', 'services', '', _.capitalize, 'service', done);
        });
    });
  });


  describe('View', function () {
    it('should generate a new view', function (done) {
      this.angularRequire.app
        .on('end', function () {
          test.createSubGenerator(
            'view',
            ['foo'],
            [
              '../../view',
              [
                helpers.createDummyGenerator(),
                'karma-require:app'
              ]
            ],
            [],
            function() {
              assert.file([appPath + '/views/foo.html']);

              done();
            }
          );
      });
    });

    it('should generate a new view in subdirectories', function (done) {
      this.angularRequire.app
        .on('end', function () {
          test.createSubGenerator(
            'view',
            ['foo/bar'],
            [
              '../../view',
              [
                helpers.createDummyGenerator(),
                'karma-require:app'
              ]
            ],
            [],
            function() {
              assert.file([appPath + '/views/foo/bar.html']);

              done();
            }
          );
      });
    });
  });
});
