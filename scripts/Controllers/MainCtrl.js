var angular = require('angular');
debugger;
var appModuleName = 'TrackerApp';

var appModule = angular.module(appModuleName);

appModule.controller('MainCtrl', function($scope){
    $scope.test = "MainCtrl up and running..."; 
})