'use strict';
var path = require('path');
var fs = require('fs');

function rewriteFile (args) {
  args.path = args.path || process.cwd();
  var fullPath = path.join(args.path, args.file);

  args.spliceWithinLine = args.spliceWithinLine || false;

  args.haystack = fs.readFileSync(fullPath, 'utf8');
  var body = rewrite(args);

  fs.writeFileSync(fullPath, body);
}

function injectIntoFile (appPath, moduleName, attachedComponentName, injectedModuleName) {

  // Set up config object
  var config = {
    file: path.join(
      appPath,
      'packages/app.js'),
    needle: "",
    splicable: [],
    spliceWithinLine: true
  };

  // Insert AMD module dependency
  config.needle = "]/*deps*/";

  moduleName = moduleName.replace(/\\/g, '/');
  moduleName = moduleName.replace('.js', '');
  moduleName = moduleName.replace('packages/', '');
  config.splicable = [ ", '" + moduleName + "'" ];

  rewriteFile(config);

  // Ensure our module is invoked
  config.needle = ")/*invoke*/";
  config.splicable = [ ", " + attachedComponentName ];

  rewriteFile(config);

  // Check for the existence of a controllers module as an
  // application dependency. If it doesn't exist, inject it
  var app_js = fs.readFileSync(path.join(appPath, 'packages/app.js'), 'utf8');
  var regex_app_module = new RegExp(injectedModuleName);

  if (!regex_app_module.test(app_js)) {
    // Inject the controllers module as an AngularJS module dependency
    config.needle = "/*angJSDeps*/";
    config.splicable = [ "'" + injectedModuleName + "',\n" ];

    rewriteFile(config);
  }
}

function injectIntoPackageIncludeFile (packageIncludePath, modulePath, injectedModuleName) {

  // Set up config object
  var config = {
    file: packageIncludePath,
    needle: "",
    splicable: [],
    spliceWithinLine: true
  };

  config.needle = "]/*packageIncludes*/";

  modulePath = modulePath.replace(/\\/g, '/');
  config.splicable = [ ", '" + modulePath + "'" ];

  rewriteFile(config);

  config.needle = "/*packageDeps*/";
  config.splicable = [ "'" + injectedModuleName + "'," ];

  rewriteFile(config);
}

function escapeRegExp (str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}

function rewrite (args) {
  // check if splicable is already in the body text
  var re = new RegExp(args.splicable.map(function (line) {
    return '\s*' + escapeRegExp(line);
  }).join('\n'));

  if (re.test(args.haystack)) {
    return args.haystack;
  }

  var lines = args.haystack.split('\n');

  var otherwiseLineIndex = 0;
  lines.forEach(function (line, i) {
    if (line.indexOf(args.needle) !== -1) {
      otherwiseLineIndex = i;
    }
  });

  if ((otherwiseLineIndex > 0) && (args.spliceWithinLine)) {
    var line = lines[otherwiseLineIndex];
    var indexToSpliceAt = line.indexOf(args.needle);

    lines[otherwiseLineIndex] = line.substr(0, indexToSpliceAt) + args.splicable[0] + line.substr(indexToSpliceAt);

    return lines.join('\n');
  }

  var spaces = 0;
  while (lines[otherwiseLineIndex].charAt(spaces) === ' ') {
    spaces += 1;
  }

  var spaceStr = '';
  while ((spaces -= 1) >= 0) {
    spaceStr += ' ';
  }

  lines.splice(otherwiseLineIndex, 0, args.splicable.map(function (line) {
    return spaceStr + line;
  }).join('\n'));

  return lines.join('\n');
}

function appName (self) {
  var counter = 0, suffix = self.options['app-suffix'];
  // Have to check this because of generator bug #386
  process.argv.forEach(function(val) {
    if (val.indexOf('--app-suffix') > -1) {
      counter++;
    }
  });
  if (counter === 0 || (typeof suffix === 'boolean' && suffix)) {
    suffix = 'App';
  }
  return suffix ? self._.classify(suffix) : '';
}

module.exports = {
  rewrite: rewrite,
  rewriteFile: rewriteFile,
  appName: appName,
  injectIntoFile: injectIntoFile,
  injectIntoPackageIncludeFile: injectIntoPackageIncludeFile
};
