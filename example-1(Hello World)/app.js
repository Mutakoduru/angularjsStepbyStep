/**This example greets you, it also shows one way(via ng-bind directive) and 2-way binding(via ng-modal directive)
through the inputs binded to $scope.fooMessage and used in hello-angular.html
**/

var helloApp = angular.module('helloApp', []);//module created

//add controller with name 'HelloController' to the module
helloApp.controller('HelloController',
	['$scope', function($scope) {
		$scope.welcomeMsg = 'Hello World From AngularJS';

	}
]);