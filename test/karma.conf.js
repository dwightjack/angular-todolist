module.exports = function(config){
	config.set({

		basePath : '../',

		files : [
			'www/vendor/angular/angular.js',
			'www/vendor/angular-mocks/angular-mocks.js',
			'www/javascripts/**/*.js',
			'test/unit/**/*.js'
		],

		//autoWatch : true,

		frameworks: ['jasmine'],

		browsers : ['PhantomJS'],

		plugins : [
			'karma-phantomjs-launcher',
			'karma-jasmine'
		]

	});
};