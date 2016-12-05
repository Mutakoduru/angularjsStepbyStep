angular.module('studentApp').filter('yesNo', function() {
	return function(input) {
        if(input) {
            return 'Yes';
        }
        return 'No';
	}
});