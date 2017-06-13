
(function() {

  'use strict';

  angular.module('graham.gr')
    .controller('GRController', GR);

  /*******************************************************************************
  * 
  ********************************************************************************/
  function GR($scope, $location, $window){
      
      
      /*******************************************************************************
      *  Global Variables
      ********************************************************************************/
      $scope.portfolio = false;
      $scope.contact = false;
      $scope.about = false;
      $scope.case = true;
      
     
      ga('set', 'page', '/gr.html');
      ga('send', 'pageview');
      
    
    /***************************************************************************************
    * On Page Load Function
    ****************************************************************************************/   
		angular.element(document).ready(function () {

    });
      
};




}());


    