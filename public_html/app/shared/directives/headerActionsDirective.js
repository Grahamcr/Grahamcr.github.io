
 (function () {
     'use strict';
     angular.module('graham')
         
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