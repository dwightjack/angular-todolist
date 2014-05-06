/*global beforeEach, afterEach, describe, expect, it, spyOn, xdescribe, xit, inject, module */
describe('todoService tests', function() {
	var todoService, $httpBackend;

	beforeEach(function() {

		module('todoListApp');

		inject(function($injector) {
			todoService = $injector.get('todoService');
			$httpBackend = $injector.get('$httpBackend');
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

		$httpBackend.expectPOST('/api/todos', toAdd).respond({error: false, body: toAdd});
		todoService.store(toAdd);
		$httpBackend.flush();

		expect(todoService.getAll().length).toBe(1);
		expect(todoService.getAll()[0]).toEqual(toAdd);



	});

	it('should have a .reset() method to clean up the todo array', function () {
		var toAdd = {title: 'another test'};

		$httpBackend.expectPOST('/api/todos', toAdd).respond({error: false, body: toAdd});
		todoService.store(toAdd);
		$httpBackend.flush();

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

	it('should have a .load() method to load elements', function () {
		var todos = [{
			_id: 1,
			title: 'title',
			description: 'description'
		}, {
			_id: 1,
			title: 'title',
			description: 'description'
		}];

		$httpBackend.expectGET('/api/todos').respond({error: false, body: todos});

		//angular.forEach(todos, todoService.store);
		todoService.load();
		$httpBackend.flush();

		expect(todoService.getAll().length).toBe(2);
	});

	//it('should have a method to update a todo on the server');



});