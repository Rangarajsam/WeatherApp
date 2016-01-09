angular.module('weatherServiceModule', [])
.constant('API_KEY','15c9a25396a5d39c42328d4e57b49')
.service('weatherService',['API_KEY',function(API_KEY){
    
    this.apiWeatherBaseUrl='https://api.worldweatheronline.com/free/v2/weather.ashx?';
    this.apiTimeZoneBaseUrl='https://api.worldweatheronline.com/free/v2/tz.ashx?';
    this.apiPastWeatherBaseUrl='https://api.worldweatheronline.com/free/v2/past-weather.ashx?';
    this.locationQuery='q=';
    this.apiKey='&key='+API_KEY;
    this.dataFormat='&format=json';
    this.noOfDays='&no_of_days=2';
    this.isIncludeLocation='&includeLocation=yes';
    this.geoError='';
   /* this.latLongValue = {
        
    };*/
    this.initiateLatLang=function(){
        navigator.geolocation.getCurrentPosition(latlong,error);
    };
    /*this.getLatLang=function(position){
        this.latLongValue={
                name:'Rangaraj',
                latitude:position.coords.latitude,
                longitude:position.coords.longitude
        
        };
        console.log(this.latLongValue);
        return this.latLongValue;
    };*/
   /* this.errorType=function(error){
        switch(error.code)
            {
                case error.PERMISSION_DENIED: 
                this.geoError='user did not share geolocation data';
                break;
 
                case error.POSITION_UNAVAILABLE: 
                this.geoError='could not detect current position';
                break;
 
                case error.TIMEOUT: 
                this.geoError='retrieving position timed out';  
                break;
 
                default: 
                this.geoError='unknown error';
                break;
            }
        return this.geoError;
    };*/
}]);