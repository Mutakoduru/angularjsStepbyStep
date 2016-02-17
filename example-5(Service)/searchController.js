var controllersModule = angular.module('controllers', ['services']);//create a module with name 'controllers' and 'services' as dependency to it

//create controller under this module 'controllers' and inject 'searchService' to it.
controllersModule.controller('searchController',
	['$scope', 'searchService', function($scope, searchService) {
		$scope.welcomeMsg = 'Search PB Site';

		$scope.search = function() {
			//use the injected searchService to make actual search
			searchService.search($scope.searchTerm).then(function(result) {
				$scope.result = result.data;//response from searchService is set in $scope.result to render it in UI.
			});
		}

	}
]);