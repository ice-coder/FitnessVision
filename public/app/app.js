angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', { templateUrl: '/partials/main/main', controller: 'mainCtrl' });
});

angular.module('app').controller('mainCtrl', function($scope) {
	$scope.myVar = "Hello Angular";
});