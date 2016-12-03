var app = angular.module('studentApp', []);

app.factory('studentService', [function() {
    return {
        calculateTotal: function(sub1, sub2, sub3) {
            return sub1 + sub2 + sub3;
        }
    }
}]);