angular.module('weatherDirectivesModule',[])
.directive('showLocalWeather',[function(){
    
    return{
        
        restrict:'AE',
        link:function(scope,ele,attr){
            
            ele.on('keypress',function(e){
                var code=e.keyCode || e.which;
                if(code===13){
                    scope.getLocalTime();
                    scope.getWeather();
                    
                }
                
                
            });
            
            
        }
        
    }
}]).
directive('loader',[function(){
    
    return{
        restrict:'AE',
        scope:{
            show:'='
        },
        replace:true,
        template:'<div class="loader-container" ng-show="show"><svg width="140px" height="140px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-blank"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><circle cx="50" cy="50" r="25" fill="#ffffff"></circle><g><path d="M79.7,53.9c-0.3,2.6-1,5-1.9,7.3l15.6,0.2L79.7,53.9z" fill="#FBF50C"></path><path d="M61.2,22.2l0.2-15.6l-7.5,13.6C56.4,20.6,58.9,21.2,61.2,22.2z" fill="#FBF50C"></path><path d="M45.8,20.3L38.1,6.8l0.4,15.5C40.8,21.3,43.2,20.7,45.8,20.3z" fill="#FBF50C"></path><path d="M73.6,31.5l7.9-13.4l-13.3,8.1C70.2,27.7,72,29.5,73.6,31.5z" fill="#FBF50C"></path><path d="M79.7,45.8l13.6-7.6l-15.5,0.4C78.7,40.8,79.3,43.2,79.7,45.8z" fill="#FBF50C"></path><path d="M31.5,26.4l-13.4-7.9l8.1,13.3C27.7,29.8,29.5,28,31.5,26.4z" fill="#FBF50C"></path><path d="M54.2,79.7l7.6,13.6l-0.4-15.5C59.2,78.7,56.8,79.3,54.2,79.7z" fill="#FBF50C"></path><path d="M22.2,38.8L6.6,38.7l13.6,7.5C20.6,43.6,21.2,41.1,22.2,38.8z" fill="#FBF50C"></path><path d="M68.5,73.6l13.4,7.9l-8.1-13.3C72.3,70.2,70.5,72,68.5,73.6z" fill="#FBF50C"></path><path d="M38.8,77.8l-0.2,15.6l7.5-13.6C43.6,79.4,41.1,78.8,38.8,77.8z" fill="#FBF50C"></path><path d="M26.4,68.5l-7.9,13.4l13.3-8.1C29.8,72.3,28,70.5,26.4,68.5z" fill="#FBF50C"></path><path d="M20.3,54.2L6.8,61.9l15.5-0.4C21.3,59.2,20.7,56.8,20.3,54.2z" fill="#FBF50C"></path><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="60 50 50" repeatCount="indefinite" dur="1s"></animateTransform></g></svg></div>',
        link:function(scope,elem,attr){
            scope.showGif=scope.show;
    }
        
        
    };
    
    
}]);