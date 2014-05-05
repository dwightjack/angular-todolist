/*global beforeEach, afterEach, describe, expect, it, spyOn, xdescribe, xit, inject, module */
describe('MainController tests', function() {
	var $rootScope, $scope, $controller, state, todoService, ctrl;

	beforeEach(function() {

		module('todoListApp');

		inject(function($injector) {
			$rootScope = $injector.get('$rootScope');
			$controller = $injector.get('$controller');
			state = $injector.get('state');
			todoService = $injector.get('todoService');

			//force this
			state.formOpen = false;

			$scope = $rootScope.$new();

			ctrl = $controller('MainController', {
				'$scope': $scope,
				'state': state
			});
		});

	});

	it('should have a toggleForm method which alters `state.formOpen` property', function () {

		expect(angular.isFunction($scope.toggleForm)).toBe(true);

		//default toggle behavior
		$scope.toggleForm();
		expect(state.formOpen).toBe(true);

		//set a specific value
		$scope.toggleForm(true);
		expect(state.formOpen).toBe(true);

	});

	it('should return `state.formOpen` property', function () {

		expect($scope.isFormVisible()).toBe(state.formOpen);

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

