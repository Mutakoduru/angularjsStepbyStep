var userInfoApp = angular.module('userInfoApp', []);

userInfoApp.controller('userController',
	['$scope', 'localStorageService', function($scope, localStorageService) {
		$scope.user = {};

		$scope.save = function() {
			localStorageService.set('user', JSON.stringify(user));
		}

		$scope.clear = function() {
			localStorageService.remove('user');
			$scope.user = {};
		}

		$scope.get = function() {
			$scope.user = JSON.parse(localStorageService.get('user'));
		}
	}
]);