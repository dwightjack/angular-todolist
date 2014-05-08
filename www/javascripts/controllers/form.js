angular.module('todoListApp')
	.controller('FormController', ['$scope', 'todoService', function ($scope, todoService) {

		$scope.isSubmitting = false;

		$scope.submitForm = function () {
            if ($scope.todoForm.$invalid !== true) {
                $scope.isSubmitting = true;
				todoService.store($scope.todo, function () {
                    $scope.isSubmitting = false;
                });
			}
		};

		$scope.isInvalid = function (inputName) {
			var el = inputName ? $scope.todoForm[inputName] : $scope.todoForm;
			return el.$dirty && el.$invalid;
		};

	}]);