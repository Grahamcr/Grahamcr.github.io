
(function() {

  'use strict';

  angular.module('graham.av')
    .controller('AVController', AV);

  /*******************************************************************************
  * 
  ********************************************************************************/
  function AV($scope, $location, $window){
      
      
      /*******************************************************************************
      *  Global Variables
      ********************************************************************************/
      $scope.portfolio = false;
      $scope.contact = false;
      $scope.about = false;
      $scope.case = true;
      
      ga('set', 'page', '/av.html');
      ga('send', 'pageview');
    
    /***************************************************************************************
    * On Page Load Function
    ****************************************************************************************/   
		angular.element(document).ready(function () {

    });
      
};




}());


    