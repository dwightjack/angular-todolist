angular.module('todoListApp')
	.factory('todoService', [function () {

		var _todos = [];

		//mocking some default todos
		_todos = [{
			_id: 1,
			title: 'test title',
			description: 'test description',
			completed: false,
			date: +(new Date())
		},
		{
			_id: 2,
			title: 'test title 2',
			description: 'test description 2',
			completed: true,
			date: +(new Date()) + 1
		}, {
			_id: 3,
			title: 'test title 3',
			description: 'test description 3',
			completed: true,
			date: +(new Date()) + 1
		}];

		return {
			getAll: function () {
				return _todos;
			},

			load: function () {
				return _todos;
			},

			store: function (params, callback) {
                var cb = callback || angular.noop;
				var todo = angular.extend({}, params);
				if (!todo._id) {
					todo._id = (_todos.length === 0 ? 0 : Math.max.apply(null, _todos.map(function (el) { return el._id; })) || 0) + 1;
				}
				_todos.push(todo);
                cb(false, todo);
			},

			reset: function () {
				_todos.length = 0;
			},

			get: function (id) {
				var ret = null;
				_todos.some(function (el) {
					if (el._id === id) {
						ret = el;
						return true;
					}
					return false;
				});
				return ret;
			},

			update: function (id, data) {
				var todo = this.get(id);

				angular.extend(todo, data || {});
			},

			remove: function (id) {
				var idx = null;

				_todos.some(function (el, i) {
					if (el._id === id) {
						idx = i;
						return true;
					} else {
						return false;
					}
				});
				if (angular.isNumber(idx)) {
					_todos.splice(idx, 1);
				}
			},

			getCompleted: function () {
				return _todos.filter(function (todo) {
					return todo.completed === true;
				}).length;
			}
		};

	}]);