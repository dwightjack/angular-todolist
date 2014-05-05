angular.module('todoListApp')
	.controller('MainController', ['$scope', 'state', 'todoService', function ($scope, state, todoService) {

		$scope.isFormVisible = function () {
			return state.formOpen;
		};

		$scope.toggleForm = function (toggle) {

			if (toggle !== undefined) {
				state.formOpen = !!toggle;
			} else {
				state.formOpen = !state.formOpen;
			}
		};

		$scope.getTotal = function () {
			return todoService.getAll().length;
		}

		$scope.getCompleted = function () {
			return todoService.getCompleted();
		}

	}]);