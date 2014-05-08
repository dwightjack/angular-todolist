/*global beforeEach, afterEach, describe, expect, it, spyOn, xdescribe, xit, inject, module, jasmine */
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

        var storeTodo = function (todo, i) {
            var t = angular.extend({}, todo);
            if (t._id) {
                delete t._id;
            }
            todoService.store(t);
        };

		angular.forEach(todos, storeTodo);

        var testTodo = todoService.getAll()[1];

		expect(todoService.get(testTodo._id).title).toBe(testTodo.title);

	});

	it('should have a .getAll() method which returns an array', function() {
		expect(angular.isArray(todoService.getAll())).toBe(true);
	});

	it('should have a .store() method providing a callback with `success` and `storedTodo` arguments', function() {
		var toAdd = {title: 'A todo item', _id: 1};
        var storeSpy = jasmine.createSpy('storeSpy');

		todoService.store(toAdd, storeSpy);

		expect(todoService.getAll().length).toBe(1);
		expect(todoService.getAll()[0]).toEqual(toAdd);
        expect(storeSpy).toHaveBeenCalledWith(false, toAdd);



	});

	it('should have a .reset() method to clean up the todo array', function () {
		var toAdd = {title: 'another test'};

		todoService.store(toAdd);

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
			_id: 2,
			title: 'title',
			description: 'description',
			completed: false
		}];


        var storeTodo = function (todo, i) {
            var t = angular.extend({}, todo);
            if (t._id) {
                delete t._id;
            }
            todoService.store(t);
        };

		angular.forEach(todos, storeTodo);

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


		angular.forEach(todos, function (todo) {
			todoService.store(todo);
		});
		todoService.load();

		expect(todoService.getAll().length).toBe(2);
	});

	//it('should have a method to update a todo on the server');



});