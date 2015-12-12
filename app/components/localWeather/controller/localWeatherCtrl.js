angular.module('localWeatherModule', [])
.controller('LocalWeatherCtrl', ['$scope','$http','weatherService','commonOperations', function($scope,$http,weatherService,commonOperations){
    
    $scope.appName='Local Weather App';
    $scope.cityName='';
        
        
    
    $scope.getWeather=function(){
        var combinedWeatherQuery=weatherService.apiWeatherBaseUrl+weatherService.locationQuery+$scope.cityName+weatherService.apiKey+weatherService.dataFormat+weatherService.noOfDays+weatherService.isIncludeLocation;
        console.log(combinedWeatherQuery+' '+$scope.cityName);
        $http.get(combinedWeatherQuery).then(function(response){
            
            var responseData=response.data;
            $scope.currentWeather=responseData.data.current_condition[0];
            $scope.nearestArea=responseData.data.nearest_area[0];
            console.log($scope.currentWeather);
        },function(){
            console.log(response);
        });
        
    };
     $scope.getLocalTime=function(){
         var combinedTimeZoneQuery=weatherService.apiTimeZoneBaseUrl+weatherService.locationQuery+$scope.cityName+weatherService.apiKey+weatherService.dataFormat;
        console.log(combinedTimeZoneQuery+' '+$scope.cityName);
        $http.get(combinedTimeZoneQuery).then(function(response){
            var responseData=response.data;
            var localDateTime=responseData.data.time_zone[0].localtime;
            $scope.localDate=commonOperations.seperateDateTime(localDateTime);
            $scope.localTime=commonOperations.seperateDateTime(localDateTime);
            
            console.log($scope.localTime);
        },function(){
            console.log(response);
        });
        
    };
}]);