angular.module('todoListApp')
	.controller('ListController', ['$scope', 'state', 'todoService', function ($scope, state, todoService) {

		$scope.todos = todoService.getAll();

		if ($scope.todos.length === 0) {
			todoService.load();
		}

		$scope.toggleDescription = function (todo) {
			if (!todo.hasOwnProperty('expanded')) {
				todo.expanded = true;
			} else {
				todo.expanded = !todo.expanded;
			}
		};

		$scope.toggleCompleted = function (todo) {
			//todo.completed = !todo.completed;
			todoService.update(todo._id, {completed: !todo.completed});
		};

		$scope.remove = function (todo) {
			todoService.remove(todo._id);
		}


	}]);