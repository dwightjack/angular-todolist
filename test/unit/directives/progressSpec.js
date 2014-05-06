/*global beforeEach, afterEach, describe, expect, it, spyOn, xdescribe, xit, inject, module */
describe('Progress directive tests', function() {
	var $rootScope, $compile, $scope;

	beforeEach(function() {

		module('todoListApp');

		inject(function($injector) {
			$rootScope = $injector.get('$rootScope');
			$compile = $injector.get('$compile');


			$scope = $rootScope.$new();

		});

	});

	it('should generate a Bootstrap progress bar component', function () {

		$scope.progress = 60;

		var element = $compile('<div my-progress="progress">{{progress}}%</div>')($scope);

		element.scope().$apply();

		var child = angular.element(element.find('div')[0]);

		expect(element.attr('class')).toContain('progress');
		expect(child.attr('class')).toContain('progress-bar');
		expect(child.css('width')).toBe('60%');
		expect(child.text()).toBe('60%');

	});
});

