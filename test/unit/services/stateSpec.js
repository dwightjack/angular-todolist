/*global beforeEach, afterEach, describe, expect, it, spyOn, xdescribe, xit, inject, module */
describe('state value service tests', function() {
	var state;

	beforeEach(function() {

		module('todoListApp');

		inject(function($injector) {
			state = $injector.get('state');
		});
	});

	it('should have a .formOpen boolean property', function() {
		expect(typeof state.formOpen === 'boolean').toBe(true);
	});

});