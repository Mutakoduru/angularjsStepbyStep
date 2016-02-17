var servicesModule = angular.module('services', []);//create services module with no dependency

//add an angular Service to this module and inject the '$http'(this is a inbuilt service provided by angular to make http calls to server)  
servicesModule.factory('searchService',
	['$http', function($http) {
		return {
			//google custom search api url
			baseURL: 'https://www.googleapis.com/customsearch/v1',
			params: {cx: '008506772874470470982:c4uftnsir9o', key: 'your_google_developer_key_goes_here'},

			search: function(term) {
				this.params.q = term;
				//make the actual http GET call to Google Server.
				return $http.get(this.baseURL, {params: this.params});
			}
		};
	}
]);