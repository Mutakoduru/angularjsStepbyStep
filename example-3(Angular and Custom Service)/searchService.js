var services = angular.module('services', []);

services.factory('searchService',
	['$http', function($http) {
		return {
			baseURL: 'https://www.googleapis.com/customsearch/v1',

			params: {cx: '008506772874470470982:c4uftnsir9o', key: 'AIzaSyC7srLdMUwMCwunn164XKb_N5r7fl8RwLY'},

			search: function(term) {
				this.params.q = term;
				return $http.get(this.baseURL, {params: this.params});
			}
		};
	}
]);