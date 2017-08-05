console.log('Webpack up and running.....');

window.jQuery = window.$ = require('jquery');
var angular = require('angular');

var appModuleName = 'TrackerApp';
angular.module(appModuleName,[]);

var mainContainter = document.getElementById('mainContainer');

///Require all controller here....
require('./Controllers/MainCtrl');


///Finally bootstrap angular app
angular.bootstrap(mainContainter,[appModuleName]);


require('./../node_modules/bootstrap/dist/css/bootstrap.css');
require('./../node_modules/bootstrap/dist/js/bootstrap.js');
require('./../node_modules/font-awesome/css/font-awesome.css');
