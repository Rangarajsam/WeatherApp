angular.module('localWeatherModule', [])
.controller('LocalWeatherCtrl', ['$scope','$http','weatherService','commonOperations','$timeout', function($scope,$http,weatherService,commonOperations,$timeout){
    
    $scope.appName='Local Weather App';
    $scope.cityName='';
    $scope.showErrorMsg=false;
    var errorMsgList={
        emptyField:'Please Type a city name.',
        cityNotAvailable:'Your city is not available in our database. Please search with a different city.',
        offline:'Please connect to internet'
    };
    $scope.getLatLang=function(position){
        $scope.latLongValue={
                latitude:position.coords.latitude,
                longitude:position.coords.longitude
        
        };
    };
    $scope.geoError='';
    $scope.errorType=function(error){
        switch(error.code)
            {
                case error.PERMISSION_DENIED: 
                $scope.geoError='user did not share geolocation data';
                break;
 
                case error.POSITION_UNAVAILABLE: 
                $scope.geoError='could not detect current position';
                break;
 
                case error.TIMEOUT: 
                $scope.geoError='retrieving position timed out';  
                break;
 
                default: 
                $scope.geoError='unknown error';
                break;
            }
        return $scope.geoError;
    };
    $scope.showLoader=true;
    $scope.getCurrentCityWeather=function(){
       navigator.geolocation.getCurrentPosition($scope.getLatLang,$scope.errorType);
        $timeout(function(){
            console.log($scope.latLongValue);
            $scope.cityName=$scope.latLongValue.latitude+','+$scope.latLongValue.longitude;
            $scope.getWeather();
            $scope.getLocalTime();
            $scope.showLoader=false;
        },1000);
        
    };
   
    
    $scope.getWeather=function(){
        var combinedWeatherQuery=weatherService.apiWeatherBaseUrl+weatherService.locationQuery+$scope.cityName+weatherService.apiKey+weatherService.dataFormat+weatherService.noOfDays+weatherService.isIncludeLocation;
        console.log(combinedWeatherQuery+' '+$scope.cityName);
        if($scope.cityName.length !== 0 && navigator.onLine){
                $http.get(combinedWeatherQuery).then(function(response){

                    var responseData=response.data;
                    var isError=responseData.data.hasOwnProperty('error');
                    if(!isError){
                        $scope.totalWeather=responseData.data.weather;
                        $scope.currentWeather=responseData.data.current_condition[0];
                        $scope.nearestArea=responseData.data.nearest_area[0];
                        console.log($scope.currentWeather);
                        $scope.showErrorMsg=false;
                        $scope.showDetails=true;
                    }
                    else{
                        $scope.showErrorMsg=true;
                        $scope.showDetails=false;
                        $scope.errorMsg=errorMsgList.cityNotAvailable;
                    }
                },function(){
                    console.log(response);
                });
        }
        else if($scope.cityName.length !== 0 && !navigator.onLine){
            $scope.showErrorMsg=true;
            $scope.showDetails=false;
            $scope.errorMsg=errorMsgList.offline;
        }
        else{
            $scope.showErrorMsg=true;
            $scope.showDetails=false;
            $scope.errorMsg=errorMsgList.emptyField;
        }
        
    };
     $scope.getLocalTime=function(){
         var combinedTimeZoneQuery=weatherService.apiTimeZoneBaseUrl+weatherService.locationQuery+$scope.cityName+weatherService.apiKey+weatherService.dataFormat;
        console.log(combinedTimeZoneQuery+' '+$scope.cityName);
         if($scope.cityName.length !== 0 && navigator.onLine){
                $http.get(combinedTimeZoneQuery).then(function(response){
                    var responseData=response.data;
                    var isError=responseData.data.hasOwnProperty('error');
                    if(!isError){
                        var localDateTime=responseData.data.time_zone[0].localtime;
                        $scope.localDate=commonOperations.seperateDateTime(localDateTime);
                        $scope.localTime=commonOperations.seperateDateTime(localDateTime);
                        console.log($scope.localTime);
                        $scope.showErrorMsg=false;
                        $scope.showDetails=true;
                    }
                    else{
                        $scope.showErrorMsg=true;
                        $scope.showDetails=false;
                    }
                },function(){
                    console.log(response);
                });
             
         }
         else if($scope.cityName.length !== 0 && !navigator.onLine){
            $scope.showErrorMsg=true;
             $scope.showDetails=false;
            $scope.errorMsg=errorMsgList.offline;
        }
         
         else{
            $scope.showErrorMsg=true;
             $scope.showDetails=false;
            $scope.errorMsg=errorMsgList.emptyField;
        }
        
    };
     $scope.getCurrentCityWeather();
    $scope.closeErrorMsg=function(){
        $scope.cityName='';
        $scope.showErrorMsg=false;
        $scope.showDetails=false;
    };
}]);