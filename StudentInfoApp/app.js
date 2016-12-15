var app = angular.module('studentInfoApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider $httpProvider) {
    $routeProvider.when('/add', {
            templateUrl: '/add.html',
            controller: 'studentInfo'
        }).when('/list', {
            templateUrl: '/studentDetails.html',
            controller: 'studentInfo'
        });
}]);

app.controller('studentInfo', ['$scope', function($scope) {
    $scope.user = {};
    $scope.totalMarks = $scope.user.english + $scope.user.maths + $scope.user.science;
    $scope.showMsg = false;

    $scope.calculateTotalMarks = function() {
        $scope.totalMarks = parseInt($scope.user.maths) + parseInt($scope.user.science) + parseInt($scope.user.english);
        $scope.showMsg = true;
    };

    $scope.addStudent = function() {
        $scope.students.push($scope.user);
        $scope.user = {};
    };

    $scope.removeStudent = function(roll) {
        var index = -1;
        /*$.each(students, function(i, student) {
            if(student.roll === roll) {
                index = i;
                return true;
            }    
        });
        if(index > -1) {
            $scope.students.splice(index, 1);
        }*/
    };

    $scope.students = [{name: 'Deepak Rana', roll: 1000}, {name: 'Tej', roll: 1001}, {name: 'Hema', roll: 1001}];
}]);