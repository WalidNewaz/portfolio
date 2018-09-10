'use strict';
/**
 * filename: routes.js
 * description: Defines all the main routes for the protfolio AngularJS app.
 */

 angular.module('portfolioApp')
 .config(function($routeProvider){
   $routeProvider
   /**
    *  Homepage Routes
    ********************************/
    .when('/', {
  	  title : 'Home',
  		controller : 'mainController'
  	})

 });
