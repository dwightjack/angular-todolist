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

		var element = $compile('<my-progress="progress"></a-great-eye>')($scope);

		expect(element.html()).toContain('60');

	});
});

