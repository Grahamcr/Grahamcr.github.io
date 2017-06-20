
(function() {

  'use strict';

  angular.module('graham.now')
    .controller('NOWController', NOW);

  /*******************************************************************************
  * 
  ********************************************************************************/
  function NOW($scope, $location, $window){
      
      
      /*******************************************************************************
      *  Global Variables
      ********************************************************************************/
      $scope.portfolio = false;
      $scope.contact = false;
      $scope.about = false;
      $scope.case = true;
      
     
      ga('set', 'page', '/now.html');
      ga('send', 'pageview');
      
    
    /***************************************************************************************
    * On Page Load Function
    ****************************************************************************************/   
		angular.element(document).ready(function () {

    });
      
};




}());


    