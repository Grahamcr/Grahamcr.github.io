/* 
 * Copyright (c) 2015 General Electric Company. All rights reserved.
 * 
 * The copyright to the computer software herein is the property of
 General Electric Company. The software may be used and/or copied only
 with the written permission of General Electric Company or in accordance
 with the terms and conditions stipulated in the agreement/contract
 under which the software has been supplied.
 */
(function() {

  'use strict';

  angular.module('graham.home')
    .controller('HomeController', Home);

  /*******************************************************************************
  * 
  ********************************************************************************/
  function Home($scope, $location, $window, $routeParams, ExampleService){
	  
      /*******************************************************************************
      *  Global Variables
      ********************************************************************************/
      
      $scope.portfolio = true;
      $scope.contact = false;
      $scope.about = false;

      $scope.prefixFinder = function() {
            var styles = window.getComputedStyle(document.documentElement, ''),
            pre = (Array.prototype.slice
              .call(styles)
              .join('') 
              .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
            )[1],
            dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
          return {
            dom: dom,
            lowercase: pre,
            css: '-' + pre + '-',
            js: pre[0].toUpperCase() + pre.substr(1)
          };
      };
      
      
      if(window.innerWidth >980) {
          $scope.prefix = $scope.prefixFinder();
      
          var controller = new ScrollMagic.Controller();


          var scene = new ScrollMagic.Scene({
              triggerElement: "#section1",
              triggerHook: 0,
              offset: 100,
              duration: 1500 
          })
          .setPin('#artifact1')
          .addTo(controller);
      }
      
      
      
      
      $scope.send = function(cinfo) {
          if(cinfo && cinfo.subject.length > 1 && cinfo.body.length > 1) {
            window.open('mailto:grahamcr.gvsu@gmail.com?subject=Message From '+ cinfo.subject +'&body='+cinfo.body + '\n\r\n\r -- ' + cinfo.email);
          }
          else {
              alert("Looks like something is missing");
          }
      };

    /*****************************************************************************************
        * Mock Service to get Post Data 
    *****************************************************************************************/
    ExampleService.getTeamInfo($scope.query)
     .success(function (data) {
         $scope.examples = data;
        
         
    });
    /***************************************************************************************
    * On Page Load Function
    ****************************************************************************************/   
		angular.element(document).ready(function () {
            
    });
      
};




}());
