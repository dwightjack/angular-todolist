angular.module('todoListApp')
.controller('ListController', ['$scope', function ($scope){

	$scope.toggleCompleted = function (todo) {
		todo.completed = !todo.completed;
	};

	$scope.toggleDescription = function (todo) {
		if (!'expanded' in todo) {
			todo.expanded = true;
		} else {
			todo.expanded = !todo.expanded;
		}
		
	};

	$scope.removeTodo = function (todo) {
		var id = todo._id;

		$scope.todos.some(function (el, i) {
			if (el._id === id) {
				$scope.todos.splice(i, 1);
			}
		});

	};

	window.$scope = $scope;

}]);