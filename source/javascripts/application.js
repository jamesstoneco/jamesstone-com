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
// require ui-router/release/angular-ui-router
//= require firebase/firebase-debug
//= require angularfire/dist/angularfire
//= require mm-foundation-templates-override
// require angular-foundation/mm-foundation
// require fastclick/lib/fastclick
// require vendor/highlight
// require vendor/socialite/socialite
// require wookmark-jquery/jquery.wookmark.js
// require vendor/lazyYT
// require_directory .


// NG APP
var app = angular.module('memberApp', [
	'firebase',
	'mm.foundation',
	]);

app.controller('MembershipCtrl', ['$scope', '$firebase', '$firebaseAuth', '$window',
	function($scope, $firebase, $firebaseAuth, $window) {
        var ref = new Firebase("https://jamesstone.firebaseio.com/");

        $scope.authObj = $firebaseAuth(ref);

        $scope.authObj.$onAuth(function(authData) {
        	if (authData) {
        		$scope.authData = authData; // load auth data into scope onAuth
        	}
        })

        $scope.login = function() {
        	$scope.authObj.$authWithPassword({
        		email: $scope.email,
        		password: $scope.password
        	}).then(function(authData) {
        		$scope.authData = authData;
        		$scope.accountError = "";
                $window.location.href="/dashboard"; // hard redirect to dashboard
            }).catch(function(error) {
                if (error.toString().indexOf("password is incorrect") > -1) {
                   $scope.accountError = "password is incorrect";
               } else if (error.toString().indexOf("user does not exist") > -1) {
                   $scope.accountError = "user does not exist, maybe you want to signup?";
               } else {
              // catchall error
              $scope.accountError = error.toString();
            }
            });
        }

        $scope.resetPassword = function() {
        	if ($scope.debug) console.log("password reset");
        	$scope.authObj.$resetPassword({
        		email: $scope.email
        	}).then(function() {
                $scope.accountError = "Your password has been sent to " + $scope.email;
            }).catch(function(error) {
                $scope.accountError = error.toString();
            });
        }

        $scope.signup = function() {
            $scope.authObj.$createUser({
                email: $scope.email,
                password: $scope.password
            }).then(function(authData) {
              $scope.accountError = "Account was created for " + $scope.email;
              $scope.login();
          }).catch(function(error) {
                $scope.accountError = error.toString();
          });
      }

      $scope.logout = function() {
       $scope.authObj.$unauth();
       $scope.authData = false;
       $scope.accountError = "You have been logged out.";

   }
}]);



// jQuery based below
// $(document).foundation();
// $(".card.article, .sidebar-test").click(function(){
// 	window.location = $(this).find("a:first").attr("href");
// 	return false;
// });
// $(".card.article, .card.product, .sidebar-test").hover(function () {
// 	window.status = $(this).find("a:first").attr("href");
// }, function () {
// 	window.status = "";
// });
// $('.lazyYT').lazyYT();
// Socialite.load("blog-social");
// hljs.initHighlightingOnLoad();

