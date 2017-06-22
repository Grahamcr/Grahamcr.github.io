
 (function () {
     'use strict';
     angular.module('graham')
         
         
     
     
     .directive("toggleMenu", ['$location', function ($location) {
             return function (scope, element, attrs) {
                 element.bind("click", function () {
                     $("#menu").toggle();
                 });
             };
        }])
     
     /***************************************************************************************
          * Redirect the user to the homepage
          ****************************************************************************************/
         .directive("redirectHome", ['$location', function ($location) {
             return function (scope, element, attrs) {
                 element.bind("click", function () {
                     window.open("#/", "_self");
                 });
             };
        }])
         /***************************************************************************************
          * Redirect the user to the homepage
          ****************************************************************************************/
         .directive("redirectAbout", ['$location', function ($location) {
             return function (scope, element, attrs) {
                 element.bind("click", function () {
                     window.open("#/about", "_self");
                 });
             };
        }])
         /***************************************************************************************
          * Redirect the user to the contact page
          ****************************************************************************************/
         .directive("redirectContact", ['$location', function ($location) {
             return function (scope, element, attrs) {
                 element.bind("click", function () {
                     window.open("#/contact", "_self");
                 });
             };
        }])
     
        /***************************************************************************************
          * Redirect the user to the contact page
          ****************************************************************************************/
         .directive("redirectGr", ['$location', function ($location) {
             return function (scope, element, attrs) {
                 element.bind("click", function () {
                     window.open("#/gr", "_self");
                 });
             };
        }])
     
     
        /***************************************************************************************
          * Redirect the user to the contact page
          ****************************************************************************************/
         .directive("redirectAv", ['$location', function ($location) {
             return function (scope, element, attrs) {
                 element.bind("click", function () {
                     window.open("#/av", "_self");
                 });
             };
        }])
     
     /***************************************************************************************
          * Redirect the user to the contact page
          ****************************************************************************************/
         .directive("redirectCt", ['$location', function ($location) {
             return function (scope, element, attrs) {
                 element.bind("click", function () {
                     window.open("#/ct", "_self");
                 });
             };
        }])
     
     /***************************************************************************************
          * Redirect the user to the contact page
          ****************************************************************************************/
         .directive("redirectIs", ['$location', function ($location) {
             return function (scope, element, attrs) {
                 element.bind("click", function () {
                     window.open("#/is", "_self");
                 });
             };
        }])
     
     /***************************************************************************************
          * Redirect the user to the contact page
          ****************************************************************************************/
         .directive("redirectPa", ['$location', function ($location) {
             return function (scope, element, attrs) {
                 element.bind("click", function () {
                     window.open("#/pa", "_self");
                 });
             };
        }])
     
     /***************************************************************************************
          * Redirect the user to the ft page
          ****************************************************************************************/
         .directive("redirectFt", ['$location', function ($location) {
             return function (scope, element, attrs) {
                 element.bind("click", function () {
                     window.open("#/ft", "_self");
                 });
             };
        }])
         /***************************************************************************************
          * Scroll down when the user clicks the learn more link or down cheveron
          ****************************************************************************************/
         .directive("processScroll", ['$location', function ($location) {
             return function (scope, element, attrs) {
                 element.bind("click", function () {
                     var target = $("#process-spacer");
                     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                     if (target.length) {
                         $('html, body').animate({
                             scrollTop: target.offset().top
                         }, 1500);
                         return false;
                     }
                 });
             };
        }])
         /***************************************************************************************
          * Scroll down when the user clicks the learn more link or down cheveron
          ****************************************************************************************/
         .directive("workScroll", ['$location', function ($location) {
             return function (scope, element, attrs) {
                 element.bind("click", function () {
                     var target = $("#bestwork");
                     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                     if (target.length) {
                         $('html, body').animate({
                             scrollTop: target.offset().top
                         }, 1500);
                         return false;
                     }
                 });
             };
        }])
         
        ;
 }());