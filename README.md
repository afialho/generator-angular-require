# AngularJS-RequireJS generator

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/) [![Build Status](https://travis-ci.org/aaronallport/generator-angular-require.svg?branch=master)](https://travis-ci.org/aaronallport/generator-angular-require) [![Dependency status](https://david-dm.org/aaronallport/generator-angular-require/status.png)](https://david-dm.org/aaronallport/generator-angular-require#info=dependencies&view=table) [![Dev Dependency Status](https://david-dm.org/aaronallport/generator-angular-require/dev-status.png)](https://david-dm.org/aaronallport/generator-angular-require#info=devDependencies&view=table) [![Peer Dependency Status](https://david-dm.org/aaronallport/generator-angular-require/peer-status.png)](https://david-dm.org/aaronallport/generator-angular-require#info=peerDependencies&view=table)

> Yeoman generator for AngularJS using RequireJS - lets you quickly set up a project with sensible defaults and best practices.


## Usage

Install `generator-angular-require`:
```
npm install -g generator-angular-require
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo angular-require`, optionally passing an app name:
```
yo angular-require [app-name]
```

`grunt build` must be run before anything else due to dependency population in the RequireJS config and the like (this will be fixed in a future version).

Run `grunt` for building and `grunt serve` for preview


## Generators

Available generators:

* [angular-require](#app) (aka [angular-require:app](#app))
* [angular-require:controller](#controller)
* [angular-require:directive](#directive)
* [angular-require:filter](#filter)
* [angular-require:route](#route)
* [angular-require:service](#service)
* [angular-require:provider](#service)
* [angular-require:factory](#service)
* [angular-require:value](#service)
* [angular-require:constant](#service)
* [angular-require:decorator](#decorator)
* [angular-require:view](#view)

**Note: Generators are to be run from the root directory of your app.**

### App
Sets up a new AngularJS-RequireJS app, generating all the boilerplate you need to get started. The app generator also optionally installs Bootstrap and additional AngularJS modules, such as angular-resource (installed by default). All files created will be in the RequireJS/AMD format, and therefore all will be within "define" blocks.

Example:
```bash
yo angular-require
```

### Route
Generates a controller and view, and configures a route in `app/scripts/app.js` connecting them.

Example:
```bash
yo angular-require:route myroute
```

Produces `app/scripts/controllers/myroute.js`:
```javascript
define(['angular'], function (angular) {
  'use strict';
  angular.module('myApp.controllers.myrouteCtrl', [])
    .controller('myrouteCtrl', function ($scope) {
      // ...
    });
});
```

Produces `app/views/myroute.html`:
```html
<p>This is the myroute view</p>
```

**Explicitly provide route URI**

Example:
```bash
yo angular:route myRoute --uri=my/route
```
Produces controller and view as above and adds a route to `app/scripts/app.js` with URI `my/route`

### Controller
Generates a controller in `app/scripts/controllers`.

Example:
```bash
yo angular-require:controller user
```

Produces `app/scripts/controllers/user.js`:
```javascript
define(['angular'], function (angular) {
  'use strict';
  angular.module('myApp.controllers.userCtrl', [])
    .controller('userCtrl', function ($scope) {
      // ...
    });
});
```
### Directive
Generates a directive in `app/scripts/directives`.

Example:
```bash
yo angular-require:directive myDirective
```

Produces `app/scripts/directives/myDirective.js`:
```javascript
define(['angular'], function (angular) {
  'use strict';
  angular.module('myApp.directives.myDirective', [])
    .directive('myDirective', function () {
      return {
        template: '<div></div>',
        restrict: 'E',
        link: function postLink(scope, element, attrs) {
          element.text('this is the myDirective directive');
        }
      };
    });
  });
```

### Filter
Generates a filter in `app/scripts/filters`.

Example:
```bash
yo angular-require:filter myFilter
```

Produces `app/scripts/filters/myFilter.js`:
```javascript
define(['angular'], function (angular) {
  'use strict';
  angular.module('myApp.filters.myFilter', [])
    .filter('myFilter', function () {
      return function (input) {
        return 'myFilter filter:' + input;
      };
    });
});
```

### View
Generates an HTML view file in `app/views`.

Example:
```bash
yo angular-require:view user
```

Produces `app/views/user.html`:
```html
<p>This is the user view</p>
```

### Service
Generates an AngularJS service.

Example:
```bash
yo angular-require:service myService
```

Produces `app/scripts/services/myService.js`:
```javascript
define(['angular'], function (angular) {
  'use strict';
  angular.module('myApp.services.myService', [])
    .service('myService', function () {
      // ...
    });
});
```

You can also do `yo angular:factory`, `yo angular:provider`, `yo angular:value`, and `yo angular:constant` for other types of services.

### Decorator
Generates an AngularJS service decorator.

Example:
```bash
yo angular-require:decorator serviceName
```

Produces `app/scripts/decorators/serviceNameDecorator.js`:
```javascript
define(['angular'], function (angular) {
  'use strict';
  angular.module('myApp.decorators.serviceName', [])
    .config(function ($provide) {
      $provide.decorator('serviceName', function ($delegate) {
        // ...
        return $delegate;
      });
    });
});
```

## Options
In general, these options can be applied to any generator, though they only affect generators that produce scripts.

### CoffeeScript
CoffeeScript is not supported at this time. Sorry. We'll take a look at CoffeeScript possibly being added at a later date.

### What happened to the Minification Safe option?

**tl;dr**: You don't need to write annotated code as the build step will handle it for you.

By default, generators produce unannotated code. Without annotations, AngularJS's DI system will break when minified. Typically, these annotations that make minification safe are added automatically at build-time, after application files are concatenated, but before they are minified. The annotations are important because minified code will rename variables, making it impossible for AngularJS to infer module names based solely on function parameters.

The recommended build process uses `ng-annotate`, a tool that automatically adds these annotations. However, if you'd rather not use it, you have to add these annotations manually yourself. Why would you do that though? If you find a bug in the annotated code, please file an issue at [ng-annotate](https://github.com/olov/ng-annotate/issues).

## Bower Components

The following packages are always installed by the [app](#app) generator:

* angular
* angular-mocks
* angular-scenario


The following additional modules are available as components on bower, and installable via `bower install`:

* angular-animate
* angular-aria
* angular-cookies
* angular-loader
* angular-messages
* angular-resource
* angular-sanitize

All of these can be updated with `bower update` as new versions of AngularJS are released.

As part of the `grunt build` command, bower dependencies are inserted into the `bootstrap.js` file using the `bower:app` task specified in the Gruntfile. The `test-bootstrap.js` file is taken care of by keeping it's dependencies in line with `bootstrap.js`. This is handled by the `replace:test` task within the Gruntfile.

## Configuration
Yeoman generated projects can be further tweaked according to your needs by modifying project files appropriately.

### Output
You can change the `app` directory by adding a `appPath` property to `bower.json`. For instance, if you wanted to easily integrate with Express.js, you could add the following:

```json
{
  "name": "yo-test",
  "version": "0.0.0",
  ...
  "appPath": "public"
}

```
This will cause Yeoman-generated client-side files to be placed in `public`.

Note that you can also achieve the same results by adding an `--appPath` option when starting generator:
```bash
yo angular [app-name] --appPath=public
```

## Testing

Running `grunt test` will run the unit tests with karma.

## Contribute

See the [contributing docs](https://github.com/yeoman/yeoman/blob/master/contributing.md)

When submitting an issue, please follow the [guidelines](https://github.com/yeoman/yeoman/blob/master/contributing.md#issue-submission). Especially important is to make sure Yeoman is up-to-date, and providing the command or commands that cause the issue.

When submitting a PR, make sure that the commit messages match the [AngularJS conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/).

When submitting a bugfix, write a test that exposes the bug and fails before applying your fix. Submit the test alongside the fix.

When submitting a new feature, add tests that cover the feature.

## Changelog

Recent changes can be viewed on Github on the [Releases Page](https://github.com/aaronallport/generator-angular-require/releases)

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/aaronallport/generator-angular-require/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

## And finally

Much <3 to the Yeoman community for creating such a great tool!

If you like generator-angular-require, please tell your friends and colleagues. If you are writing about or mentioning generator-angular-require, let me know and I will happily link to it from here.

Thank you!
