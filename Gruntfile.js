/*jshint node:true */
module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		bowerrc: grunt.file.readJSON('.bowerrc'),

		paths: {
			less: '<%= paths.www %>/less',
			test: 'test',
			www: 'www',
			'css': '<%= paths.www %>/stylesheets',
			'js': '<%= paths.www %>/javascripts',
			'images': '<%= paths.www %>/images',
			vendor: '<%= bowerrc.directory %>'
		},


		/**
		 * Less Compile
		 * ===============================
		 */
		less: {
			options: {
				paths: ['<%= paths.less %>', '<%= paths.vendor %>']
			},
			development: {
				files: {
					'<%= paths.css %>/application.css': '<%= paths.less%>/application.less'
				}
			}
		},


		/**
		 * Standalone Static Server
		 * ===============================
		 */
		connect: {
			options: {
				hostname: '*',
				//port: 80,
				base: '<%= paths.www %>',
				livereload: true,
				middleware: function(connect, options, middlewares) {
					middlewares.push(require('./server'));
					return middlewares;
				}

			},
			server: {}
		},

		/**
		 * Watch Task (used internally)
		 * ===============================
		 */
		watch: {
			less: {
				files: ['<%= paths.less %>/**/*.less'],
				tasks: ['less']
			},
			karma: {
				files: ['<%= paths.js %>/**/*.js', '<%= paths.test %>/unit/**/*.js'],
				tasks: ['karma:unit:run'] //NOTE the :run flag
			},
			livereload: {
				options: {
					livereload: true
				},
				files: [
					'<%= paths.www %>/*.html',
					'<%= paths.css %>/{,*/}*.css',
					'<%= paths.images %>/{,*/}*.{png,jpg,jpeg,gif}',
					'<%= paths.js %>/**/*.js'
				]
			}
		},


		/**
		 * Testing
		 * ==============================
		 */
		karma: {
			unit: {
				configFile: '<%= paths.test %>/karma.conf.js',
				background:true
			}
		}

	});

	// Default task(s).
	grunt.registerTask('default', ['less', 'connect:server', 'karma:unit:start', 'watch']);

};