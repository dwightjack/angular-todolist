/*global beforeEach, afterEach, describe, expect, it, spyOn, xdescribe, xit, inject, module */
describe('MainController tests', function() {
	var $rootScope, $scope, $controller, state, todoService, ctrl;

	beforeEach(function() {

		module('todoListApp');

		inject(function($injector) {
			$rootScope = $injector.get('$rootScope');
			$controller = $injector.get('$controller');
			todoService = $injector.get('todoService');

			$scope = $rootScope.$new();

			ctrl = $controller('MainController', {
				'$scope': $scope
			});
		});

	});


	it('should calculate completed todos', function () {
		spyOn(todoService, 'getCompleted');

		$scope.getCompleted();

		expect(todoService.getCompleted).toHaveBeenCalled();
	});

	it('should calculate total todos', function () {
		spyOn(todoService, 'getAll').andCallThrough();

		$scope.getTotal();

		expect(todoService.getAll).toHaveBeenCalled();
	});



});

