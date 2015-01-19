// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//

//= require fastclick/lib/fastclick
//= require viewport-units-buggyfill/viewport-units-buggyfill
//= require tether/tether
//= require angular/angular
//= require angular-animate/angular-animate
//= require ui-router/release/angular-ui-router

// require_directory ../../bower_compontents/foundation-apps/js/vendor
// require_directory ../../bower_compontents/foundation-apps/js/angular

//= require foundation-apps/js/vendor/iconic.min

//= require foundation-apps/js/angular/foundation
//= require foundation-apps/js/angular/components/accordion/accordion
//= require foundation-apps/js/angular/components/actionsheet/actionsheet
//= require foundation-apps/js/angular/components/common/common
//= require foundation-apps/js/angular/components/iconic/iconic
//= require foundation-apps/js/angular/components/interchange/interchange
//= require foundation-apps/js/angular/components/modal/modal
//= require foundation-apps/js/angular/components/notification/notification
//= require foundation-apps/js/angular/components/offcanvas/offcanvas
//= require foundation-apps/js/angular/components/panel/panel
//= require foundation-apps/js/angular/components/popup/popup
//= require foundation-apps/js/angular/components/tabs/tabs
//= require foundation-apps/js/angular/services/foundation.core
//= require foundation-apps/js/angular/services/foundation.dynamicRouting.animations
//= require foundation-apps/js/angular/services/foundation.dynamicRouting
//= require foundation-apps/js/angular/vendor/markdown
//= require_directory .

(function() {
  'use strict';

  var App = angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
  	.controller('ArticlesCtrl', function($scope, $http) {
	  $http.get('api/articles.json').
	    success(function(data, status, headers, config) {
	      $scope.articles = data;
	    }).
	    error(function(data, status, headers, config) {
	      // log error
	    });
	})

    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }



})();


// routes

var foundationRoutes = [{"name":"home","url":"/","path":"/ng-templates/home.html"}]; 


// $(".card.article, .sidebar-test").click(function(){
// 	window.location = $(this).find("a:first").attr("href");
// 	return false;
// });

// // Show URL on Mouse Hover
// $(".card.article, .card.product, .sidebar-test").hover(function () {
// 	window.status = $(this).find("a:first").attr("href");
// }, function () {
// 	window.status = "";
// });


// $(".front").click(function(){
// 	$( "div.flip-container" ).toggleClass( "flip" )
// });



// ga code below

// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
// })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

// ga('create', 'UA-19284762-1', 'jamesstone.co');
// ga('send', 'pageview');


// $('.lazyYT').lazyYT();

// Socialite.load("blog-social");
// hljs.initHighlightingOnLoad();



