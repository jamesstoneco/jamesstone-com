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
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require angular/angular
//= require mm-foundation-templates-override
//= require angular-lazytube/angular-lazytube
//= require moment/min/moment.min
//= require angular-scroll/angular-scroll.js
// require_directory .


// NG APP
var app = angular.module('fcastsApp', ['mm.foundation',
  'oblador.lazytube',
  'duScroll'
  ]);


// app.controller('MembershipCtrl', ['$scope', '$firebase', '$firebaseAuth', '$window', '$document',
//   function($scope, $firebase, $firebaseAuth, $window, $document) {


app.controller('FcastsCtrl', ['$scope', '$window', '$document',
	function($scope, $window, $document) {
    $scope.scrollToId = function(targetId) {
      var el = angular.element(document.querySelector('#' + targetId));
      $document.scrollToElementAnimated(el, 0, 2000);
    }
  }]);
