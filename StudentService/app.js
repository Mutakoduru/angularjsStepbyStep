var app = angular.module('studentApp');

app.controller('studentController', ['$scope', 'studentService', '$rootScope', function($scope, studentService, $rootScope) {
    $scope.user = {name: 'Deepak', sub1: 29, sub2: 30, sub3: 24, fees: 1000000, pass: true};

    $scope.calculateTotal = function() {
        $scope.totalMarks = studentService.calculateTotal($scope.user.sub1, $scope.user.sub2, $scope.user.sub3);
        $scope.showMsg = true;
    }
}]);
