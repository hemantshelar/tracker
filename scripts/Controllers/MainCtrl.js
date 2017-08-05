var angular = require('angular');
var appModuleName = 'TrackerApp';

var appModule = angular.module(appModuleName);

appModule.component('mainContent',{
    templateUrl: './scripts/Controllers/MainCtrl.html'
});