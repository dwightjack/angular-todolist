angular.module('todoListApp')
	.controller('FormController', ['$scope', 'state', 'todoService', function ($scope, state, todoService) {

		$scope.isSubmitting = function () {
			return state.formSubmitting;
		}

		$scope.submitForm = function () {
			state.isFormSubmitting = true;
			if ($scope.todoForm.$invalid !== true) {
				todoService.store($scope.todo);
			}
			state.isFormSubmitting = false;
		};

		$scope.isInvalid = function (inputName) {
			var el = inputName ? $scope.todoForm[inputName] : $scope.todoForm;
			return el.$dirty && el.$invalid;
		};

	}]);