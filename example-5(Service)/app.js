/**
This example uses the Google Custom Search service to search in the 'www.pb.com.com' domain.
The term entered in 'Term:' textbox(in pb-search-app.html file) is searched accross this domain.
The response of the google api is a json object and the same is shown to user. The application consist of three modules:

1. 'services' defined in searchService.js. It defines a service.
2. 'controllers' defined in searchController.js. It defines a controller.
3. 'pbSearchApp' defined in searchService.js. This is the main app module defined below.

**/

angular.module('pbSearchApp', ['controllers']);//module is dependent on module 'controllers' defined in searchController.js