var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    // Removed "Spec" naming from files
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/app/scripts',

    paths: {

    },

    shim: {
        'angular' : {'exports' : 'angular'}<% if (routeModule) { %>,
        'angular-route': ['angular']<% } %><% if (cookiesModule) { %>,
        'angular-cookies': ['angular']<% } %><% if (sanitizeModule) { %>,
        'angular-sanitize': ['angular']<% } %><% if (resourceModule) { %>,
        'angular-resource': ['angular']<% } %><% if (animateModule) { %>,
        'angular-animate': ['angular']<% } %><% if (touchModule) { %>,
        'angular-touch': ['angular']<% } %>,
        'angular-mocks': {
          deps:['angular'],
          'exports':'angular.mock'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
