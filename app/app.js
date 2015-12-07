'use strict';

// Declare app level module which depends on views, and components
angular.module('weatherApp', ['ngRoute','localWeatherModule','weatherServiceModule','weatherDirectivesModule'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/',{
        
        templateUrl:'components/localWeather/views/local-weather.html',
        controller:'LocalWeatherCtrl'
        
    });
  $routeProvider.otherwise({redirectTo: '/'});
}]);
