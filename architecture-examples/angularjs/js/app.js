/*global angular */
/*jshint unused:false */
'use strict';

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
var templatePath = window.angularTemplatePath || './templates/',
    todomvc = angular.module('todomvc', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/overview', {
                templateUrl: templatePath + 'overview.html',
                controller: 'TodoCtrl'
            }).
            when('/overview/:status', {
                templateUrl: templatePath + 'overview.html',
                controller: 'TodoCtrl'
            }).
            otherwise({
                redirectTo: '/overview'
            });
    }]);
