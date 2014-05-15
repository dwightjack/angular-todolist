angular.module('todoListApp')
.controller('MainController', ['$scope', function ($scope) {

	$scope.todos = [{
		_id: 1,
		title: 'Titolo',
		description: 'Descrizione',
		completed: false
	},
	{
		_id: 2,
		title: 'Titolo 2',
		description: 'Descrizione 2',
		completed: true
	},
	{
		_id: 3,
		title: 'Titolo 3',
		description: 'Descrizione 3',
		completed: true
	}];

	$scope.getCompleted = function () {
		return $scope.todos.filter(function (todo) {
			return todo.completed;
		}).length;
	};

	$scope.getCompletedPerc = function () {
		var completed = $scope.getCompleted();
		var total = $scope.todos.length;
		return completed*100/total;
	};

}]);