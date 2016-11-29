var app = angular.module('studentInfoApp', []);

app.controller('studentInfo', ['$scope', function($scope) {
    $scope.user = {};
    $scope.totalMarks = $scope.user.english + $scope.user.maths + $scope.user.science;
    $scope.showMsg = false;

    $scope.calculateTotalMarks = function() {
        $scope.totalMarks = parseInt($scope.user.maths) + parseInt($scope.user.science) + parseInt($scope.user.english);
        $scope.showMsg = true;
    }

}]);