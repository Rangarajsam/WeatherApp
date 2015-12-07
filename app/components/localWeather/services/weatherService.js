angular.module('weatherServiceModule', [])
.constant('API_KEY','15c9a25396a5d39c42328d4e57b49')
.service('weatherService',['API_KEY',function(API_KEY){
    
    var apiBaseUrl='https://api.worldweatheronline.com/free/v2/weather.ashx?';
    this.locationQuery='q=';
    this.apiKey='&key='+API_KEY;
    this.dataFormat='&format=json';
    this.noOfDays='&no_of_days=3';
    this.isIncludeLocation='&includeLocation=yes';
    this.getBaseUrl=function(){
     return apiBaseUrl;
        
    }
    
}]);