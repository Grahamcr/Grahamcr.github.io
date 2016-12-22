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

  angular.module('graham.contact')
    .controller('ContactController', Contact);

  /*******************************************************************************
  * 
  ********************************************************************************/
  function Contact($scope, $location, $window){
      
      
      /*******************************************************************************
      *  Global Variables
      ********************************************************************************/
      $scope.portfolio = false;
      $scope.contact = true;
      $scope.about = false;
      /*******************************************************************************
      *  Close the given popup
      ********************************************************************************/
      $scope.close = function(id) {
          $('#'+id).hide();
          $('#contact-overlay').hide();
      };
      
      
      ga('set', 'page', '/contact.html');
      ga('send', 'pageview');
      
      
      /*******************************************************************************
      *  Send the feedback to MyApps Admin using ajax call
      ********************************************************************************/
      $scope.send = function(cinfo) {
          if(cinfo && cinfo.subject.length > 1 && cinfo.body.length > 1) {
            window.open('mailto:grahamcr.gvsu@gmail.com?subject=Message From '+ cinfo.subject +'&body='+cinfo.body + '\n\r\n\r -- ' + cinfo.email);
          }
          else {
              alert("Looks like something is missing");
          }
      };
      
      
    
    /***************************************************************************************
    * On Page Load Function
    ****************************************************************************************/   
		angular.element(document).ready(function () {

    });
      
};




}());


    