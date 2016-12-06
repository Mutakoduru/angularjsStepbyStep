/**
here are are creating a directive with name required and using this we are adding a '*' symbon in the html markup
**/
angular.module('studentApp', []).directive('required', function() {
	return function($scope, element) {
		$(element).parents("tr").children(":nth-child(1)").children("label").append("<span style='color: red;'><strong>&nbsp;*</strong></span>");
	};
});