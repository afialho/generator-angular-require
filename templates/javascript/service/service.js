define(['./module'], function (module) {
	'use strict';

	/**
	 * @ngdoc service
	 * @name <%= scriptAppName %>.<%= artifactName %>
	 * @description
	 * # <%= artifactName %>
	 * Service in the <%= scriptAppName %>.
	 */
	module.service('<%= artifactName %>Service', ['$resource',
		function ($resource) {
			return $resource('my/rest-url/:action', {id: '@id', action: '@action'}, {
				show: {method: 'GET'},
				list: {method: 'GET', isArray: true},
				count: { method: 'GET', params: { action: 'count' }},
				create: {method: 'POST'},
				update: {method: 'PUT'},
				delete: {method: 'DELETE'}
			});
		}]);
});
