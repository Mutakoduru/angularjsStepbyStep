var helloApp = angular.module('helloApp', []);

helloApp.controller('HelloController',
	['$scope', function($scope) {
		$scope.welcomeMsg = 'Hello World From AngularJS';

	}
]);