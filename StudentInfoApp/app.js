var app = angular.module('studentInfoApp', []);

app.controller('studentInfo', ['$scope', function($scope) {
    $scope.user = {};
    $scope.totalMarks = $scope.user.english + $scope.user.maths + $scope.user.science;
    $scope.showMsg = false;

    $scope.calculateTotalMarks = function() {
        $scope.totalMarks = parseInt($scope.user.maths) + parseInt($scope.user.science) + parseInt($scope.user.english);
        $scope.showMsg = true;
    }

    $scope.addStudent = function() {
        $scope.students.push($scope.user);
        $scope.user = {};
    }
    $scope.students = [{name: 'Deepak Rana', roll: 1000}, {name: 'Tej', roll: 1001}, {name: 'Hema', roll: 1001}];
}]);