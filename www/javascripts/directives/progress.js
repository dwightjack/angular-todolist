angular.module('todoListApp')
.directive('myProgress', function () {

		return {
			restrict: 'AC',
			template: '<div class="progress"><div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div>',
			link: function (scope, element, attrs) {

			}
		}
	});