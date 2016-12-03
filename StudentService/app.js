var app = angular.module('studentApp');

app.controller('studentController', ['$scope', 'studentService', function($scope, studentService) {
    $scope.user = {name: 'Deepak', sub1: 29, sub2: 30, sub3: 24};

    $scope.calculateTotal = function() {
        $scope.totalMarks = studentService.calculateTotal($scope.user.sub1, $scope.user.sub2, $scope.user.sub3);
        $scope.showMsg = true;
    }
}]);
