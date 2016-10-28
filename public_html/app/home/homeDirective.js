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
    * Use margins to "crop" the artifact images as the user scrolls
    ***********************************************************************/
    .directive("scroll", function ($window) {
        return function(scope, element, attrs) {
            angular.element($window).bind("scroll", function() {
                
                if(window.innerWidth > 980) {


                    //console.log(this.pageYOffset);
                    var tl = new TimelineLite();

                    var pre = scope.prefix;
                    var _jsPrefix  = pre.lowercase;
                    if(_jsPrefix == 'moz') {
                        _jsPrefix = 'Moz';  
                    } 
                    var _cssPrefix = pre.css;

                    console.log($(window).scrollTop());
                    
                     //This means the user has scrolled into the foundation section of the page
                    if(this.pageYOffset > 1960 && this.pageXOffset < 3330) {
                        tl.to("#artifact2", 0, {display:"inherit"});
                        var bannerBottom = ($('#divider1').offset().top) - $(window).scrollTop();
                        if(bannerBottom < 0) {
                            tl.to("#artifact2", 0, {position:"fixed", top:"0px"});
                            tl.to("#artifact2_image", 0, {marginTop:"0px"});
                        }else {
                            var crop = -1100 + (this.pageYOffset - 1860) + "px";
                            var item = document.querySelector("#artifact2_image");

                            item.style[_jsPrefix+'Transform'] = 'translate3d('+'0px, '+ crop + ', 0px)';
                            tl.to("#artifact2", 0, {position:"relative", top:"0px"});
                        }

                    }

                    //Mockup and Design
                    if(this.pageYOffset > 3290 && this.pageYOffset < 5400) {
                        tl.to("#artifact3", 0, {display:"inherit"});
                        var bannerBottom = ($('#divider2').offset().top) - $(window).scrollTop();
                        if(bannerBottom < 0) {
                            tl.to("#artifact2", 0, {display:"none"});
                            tl.to("#artifact3", 0, {position:"fixed", top:"0px"});
                            tl.to("#artifact3_image", 0, {marginTop:"0px"});
                        }else {
                            
                            var crop = -1100 + (this.pageYOffset - 3100);
                            tl.to("#artifact3_image", 0, {marginTop:crop});
                            tl.to("#artifact3", 0, {position:"relative", top:"0px"});
                        }


                    }

                    //Usability Testing
                    if(this.pageYOffset > 4630 && this.pageYOffset < 6150) {
                        
                        tl.to("#artifact4", 0, {display:"inherit"});
                        var bannerBottom = ($('#divider3').offset().top) - $(window).scrollTop();
                        if(bannerBottom < 0) {
                            tl.to("#artifact3", 0, {display:"none"});
                            tl.to("#artifact4", 0, {position:"fixed", top:"0px"});
                            tl.to("#artifact4_image", 0, {marginTop:"0px"});
                        }else {
                            var crop = -1100 + (this.pageYOffset - 4270);
                            tl.to("#artifact4_image", 0, {marginTop:crop});
                            tl.to("#artifact4", 0, {position:"relative", top:"0px"});
                        }



                    }
                    //Development
                    if(this.pageYOffset > 6090) {
                        tl.to("#artifact5", 0, {display:"inherit"});
                        var bannerBottom = ($('#divider4').offset().top + 100) - $(window).scrollTop();
                        if(bannerBottom < 0) {
                            tl.to("#artifact4", 0, {display:"none"});
                            tl.to("#artifact5", 0, {position:"fixed", top:"0px"});
                            tl.to("#artifact5_image", 0, {marginTop:"0px"});
                        }else {
                            var crop = -1100 + (this.pageYOffset - 5600);
                            tl.to("#artifact5_image", 0, {marginTop:crop});
                            tl.to("#artifact5", 0, {position:"relative", top:"0px"});
                        }


                    }


                    scope.last = this.pageYOffset;

                    tl.play();

                    scope.$apply();
                }

            });
        };
    })


    
    
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


            });
        };
    }])


    ;
    
      
    
        
}());


