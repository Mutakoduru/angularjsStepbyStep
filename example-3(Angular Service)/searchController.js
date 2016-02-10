var controllers = angular.module('controllers', ['services']);

controllers.controller('searchController',
	['$scope', 'searchService', function($scope, searchService) {
		$scope.welcomeMsg = 'Search PB Site';
		$scope.search = function() {
			searchService.search($scope.searchTerm).then(function(result) {
				$scope.result = result.data;
			}, function(response) {
				console.log(response);
			});
		}
	}
]);