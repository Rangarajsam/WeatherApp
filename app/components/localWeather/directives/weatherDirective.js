angular.module('weatherDirectivesModule',[])
.directive('showLocalWeather',[function(){
    
    return{
        
        restrict:'AE',
        link:function(scope,ele,attr){
            
            ele.on('keypress',function(e){
                var code=e.keyCode || e.which;
                if(code===13){
                    
                    scope.getWeather();
                    
                }
                
                
            });
            
            
        }
        
        
    }
    
    
}]);