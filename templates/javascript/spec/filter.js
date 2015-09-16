/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Filter: <%= cameledName %>', function () {

    // load the filter's module
    beforeEach(module('<%= scriptAppName %>.filters.<%= classedName %>'));

    // initialize a new instance of the filter before each test
    var <%= cameledName %>;
    beforeEach(inject(function ($filter) {
      <%= cameledName %> = $filter('<%= cameledName %>');
    }));

    it('should return the input prefixed with "<%= cameledName %> filter:"', function () {
      var text = 'angularjs';
      expect(<%= cameledName %>(text)).toBe('<%= cameledName %> filter: ' + text);
    });

  });
});
