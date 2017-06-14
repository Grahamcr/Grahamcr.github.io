
(function() {

  'use strict';

  angular.module('graham.is')
    .controller('ISController', IS);

  /*******************************************************************************
  * 
  ********************************************************************************/
  function IS($scope, $location, $window){
      
      
      /*******************************************************************************
      *  Global Variables
      ********************************************************************************/
      $scope.portfolio = false;
      $scope.contact = false;
      $scope.about = false;
      $scope.case = true;
      
     
      ga('set', 'page', '/is.html');
      ga('send', 'pageview');
      
    
    /***************************************************************************************
    * On Page Load Function
    ****************************************************************************************/   
		angular.element(document).ready(function () {

    });
      
};




}());


    