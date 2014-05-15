angular.module('todoListApp')
.directive('myProgress', function () {

	return {
		restrict: 'AC',
		transclude: true,
		template: '<div class="progress"><div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" ng-transclude></div></div> ',
		replace: true,
		link: function (scope, element, attrs) {
			var progressbar = angular.element(element.find('div')[0]);
			//var value = scope.$eval(attrs.myProgress);
			
			scope.$watch(attrs.myProgress, function (value) {
				progressbar.css('width', value + '%').
				attr('aria-valuenow', parseInt(value, 10));	
			});

			
		}
	};

});