var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var path    = require('path');

exports.createSubGenerator = function (type, args, deps, options, asserts) {
  helpers.run(path.join(__dirname, '../' + type))
    .withGenerators(deps)
    .withArguments(args)
    .withOptions(options)
    .on('end', asserts);
};

exports.createAppGenerator = function (args, deps, options) {
  var app = helpers.createGenerator('angular-require:app', deps, args, options);
  app.options['skip-install'] = true;
  return app;
};
