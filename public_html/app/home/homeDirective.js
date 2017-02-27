 /*
 * Copyright (c) 2015 General Electric Company. All rights reserved.
 *
 * The copyright to the computer software herein is the property of
 General Electric Company. The software may be used and/or copied only
 with the written permission of General Electric Company or in accordance
 with the terms and conditions stipulated in the agreement/contract
 under which the software has been supplied.
 */
(function () {
    'use strict';

    angular.module('graham.home')
    
    


    
    
    /**********************************************************************
    * Template for the team memeber profile modal
    ***********************************************************************/
    .directive("examplemodal", function () {
        return {
            restrict: 'E',
            scope: {
                example: '=data'
            },
            templateUrl: 'app/home/ExampleTemplate/exampleModal.html'
        }
    })

    /***************************************************************************************
    * Open the proflie modal for the team member clicked on
    ****************************************************************************************/ 
    .directive("openExample", ['$location', function($location){
        return function(scope, element, attrs){
            element.bind("click", function(){

                $('#'+attrs.ename).show();
                $('#overlay').show();
                $('body').css("overflow", "hidden");
                $('html').css("overflow", "hidden");

            });
        };
    }])
    /***************************************************************************************
    * Close profile modal
    ****************************************************************************************/ 
    .directive("closeExample", ['$location', function($location){
        return function(scope, element, attrs){
            element.bind("click", function(){

                $('.example-modal').hide();
                $('#overlay').hide();
                $('body').css("overflow-y", "auto");
                $('html').css("overflow-y", "auto");
                
            });
        };
    }])


    ;
    
      
    
        
}());


