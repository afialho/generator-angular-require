/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: <%= cameledName %>', function () {

    // load the service's module
    beforeEach(module('<%= scriptAppName %>.services.<%= classedName %>'));

    // instantiate service
    var <%= cameledName %>;
    beforeEach(inject(function (_<%= cameledName %>_) {
      <%= cameledName %> = _<%= cameledName %>_;
    }));

    it('should do something', function () {
      expect(!!<%= cameledName %>).toBe(true);
    });

  });
});
