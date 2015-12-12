angular.module('weatherServiceModule')
.service('commonOperations',[function(){
    this.seperateDateTime=function(inputFormat){
        var outputDateTime=new Date(inputFormat); 
        /*var outputDate=outputDateTime.toString().substring(0,15);
        var outputTime=outputDateTime.toString().substring(16,21);
        var outputDateObject={
            date:outputDate,
            time:outputTime
        };*/
        return outputDateTime;
    };
    
    
}]);