/**
here are are creating a directive with name required and using this we are adding a '*' symbon in the html markup
**/
angular.module('epaApp').directive('required', function() {
	return function(scope, element) {
		$(element).parents("tr").children(":nth-child(1)").children("label").append("<span class='warning'><strong>&nbsp;*</strong></span>");
	};
});