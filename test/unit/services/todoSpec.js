/*global beforeEach, afterEach, describe, expect, it, spyOn, xdescribe, xit, inject, module */
describe('todoService tests', function() {
	var todoService;

	beforeEach(function() {

		module('todoListApp');

		inject(function($injector) {
			todoService = $injector.get('todoService');
		});
	});

	it('should have a todos array', function() {
		expect(angular.isArray(todoService.todos)).toBe(true);
	});

});