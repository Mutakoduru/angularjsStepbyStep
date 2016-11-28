var app = angular.module('helloWorldApp', []);

app.controller('helloWorldCntrl', ['$scope', function($scope) {
    $scope.welcomeMsg = 'Hello from AngularJS';
}]);

app.controller('userInfoCntrl', ['$scope', function(scope) {
    scope.user = {fname: 'Deepak', roll: 100, lname: 'Rana', math: 100, sci: 20, eng: 90};
}]);