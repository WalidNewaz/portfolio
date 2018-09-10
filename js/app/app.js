'use strict';
/**
 * filename: app.js
 * description: The App level module.
 */

angular.module('portfolioApp', [
  'ngRoute'
]).
run(function($rootScope) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    $rootScope.title = current.$$route.title;
  });
}).
controller('mainController', function(){
  console.log('[portfolioApp.mainController] Starting main controller...');
});
