/*global beforeEach, afterEach, describe, expect, it, spyOn, xdescribe, xit, inject, module */
describe('ListController tests', function() {
	var $rootScope, $scope, $controller, state, todoService, ctrl;

	beforeEach(function() {

		module('todoListApp');

		inject(function($injector) {
			$rootScope = $injector.get('$rootScope');
			$controller = $injector.get('$controller');
			todoService = $injector.get('todoService');


			//force todo reset
			todoService.reset();

			$scope = $rootScope.$new();

			ctrl = $controller('ListController', {
				'$scope': $scope,
				'todoService': todoService
			});
		});

	});

	it('should expose a `todos` array listing all todos', function () {

		expect(angular.isArray($scope.todos)).toBe(true);

	});

	it('should have a method to toggle complete state on a todo item', function () {

		var todo = {
			_id: 1,
			'title': 'test title',
			'description': 'test description',
			'completed': false
		};

		todoService.store(todo);


		spyOn(todoService, 'update').andCallThrough();

		$scope.toggleCompleted(todo);

		expect(todoService.update).toHaveBeenCalledWith(1, jasmine.any(Object));

	});

	it('should have a method to toggle todo description', function () {

		//mocking a todo
		var todo = {
			'title': 'test title',
			'description': 'test description',
			'completed': false
		};
		$scope.toggleDescription(todo);

		expect(todo.expanded).toBeDefined();
		expect(todo.expanded).toBe(true);

		$scope.toggleDescription(todo);

		expect(todo.expanded).toBe(false);

	});

	it('should remove a todo by its id', function () {
		var todo = {
			_id: 1,
			'title': 'test title',
			'description': 'test description',
			'completed': false
		};

		spyOn(todoService, 'remove');

		todoService.store(todo);

		$scope.remove(todo);

		expect(todoService.remove).toHaveBeenCalledWith(1);

	});





});

