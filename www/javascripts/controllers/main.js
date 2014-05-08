angular.module('todoListApp')
	.controller('MainController', ['$scope', 'todoService', function ($scope, todoService) {

		$scope.getTotal = function () {
			return todoService.getAll().length;
		}

		$scope.getCompleted = function () {
			return todoService.getCompleted();
		}

	}]);