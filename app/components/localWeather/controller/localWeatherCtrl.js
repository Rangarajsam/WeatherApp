angular.module('localWeatherModule', [])
.controller('LocalWeatherCtrl', ['$scope','$http','weatherService', function($scope,$http,weatherService){
    
    $scope.appName='Local Weather App';
    $scope.cityName='';
    var baseUrl=weatherService.getBaseUrl();
    
    $scope.getWeather=function(){
        var combinedUrl=baseUrl+weatherService.locationQuery+$scope.cityName+weatherService.apiKey+weatherService.dataFormat+weatherService.noOfDays+weatherService.isIncludeLocation;
        console.log(combinedUrl+' '+$scope.cityName);
        $http.get(combinedUrl).then(function(response){
            
            var responseData=response.data;
            $scope.currentWeather=responseData.data.current_condition[0];
            $scope.nearestArea=responseData.data.nearest_area[0];
            console.log($scope.currentWeather);
        },function(){
            console.log(response);
        });
        
    }
}]);