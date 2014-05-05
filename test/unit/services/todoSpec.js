/*global beforeEach, afterEach, describe, expect, it, spyOn, xdescribe, xit, inject, module */
describe('todoService tests', function() {
	var todoService;

	beforeEach(function() {

		module('todoListApp');

		inject(function($injector) {
			todoService = $injector.get('todoService');
			//force todo reset
			todoService.reset();
		});
	});


	it('should have a method to get a todo by its `_id` ', function () {

		var todos = [{
			_id: 1,
			title: 'test title',
			'descrition': 'description'
		}, {
			_id: 2,
			title: 'test title 2',
			'descrition': 'description'
		}];

		angular.forEach(todos, todoService.store);

		expect(todoService.get(2).title).toBe(todos[1].title);

	});

	it('should have a .getAll() method which returns an array', function() {
		expect(angular.isArray(todoService.getAll())).toBe(true);
	});

	it('should have a .store() method which returns the rewly added element', function() {
		var toAdd = {title: 'A todo item'};

		todoService.store(toAdd);

		expect(todoService.getAll().length).toBe(1);
		expect(todoService.getAll()[0]).toEqual(toAdd);

	});

	it('should have a .reset() method to clean up the todo array', function () {
		todoService.store({title: 'another test'});

		expect(todoService.getAll().length).toBeGreaterThan(0);

		todoService.reset();

		expect(todoService.getAll().length).toBe(0);
	});

	it('counts completed todos in the stack', function () {
		var todos = [{
			_id: 1,
			title: 'title',
			description: 'description',
			completed: true
		}, {
			_id: 1,
			title: 'title',
			description: 'description',
			completed: false
		}];

		angular.forEach(todos, todoService.store);

		expect(todoService.getCompleted()).toBe(1);

	});

	//it('should have a .load() method to load elements');

	//it('should have a method to update a todo on the server');



});