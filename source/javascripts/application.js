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
//= require angular-lazytube/angular-lazytube
//= require allmighty-autocomplete/script/autocomplete
// require angular-foundation/mm-foundation
// require fastclick/lib/fastclick
// require vendor/highlight
// require vendor/socialite/socialite
// require wookmark-jquery/jquery.wookmark.js
// require vendor/lazyYT
//= require moment/min/moment.min
//= require lunr.min
// require_directory .


// NG APP
var app = angular.module('memberApp', [
	'firebase',
	'mm.foundation',
  'oblador.lazytube',
  'autocomplete',
  ]);

app.controller('ArticlesCtrl', function($scope, $http, $window) {
  $scope.numberOfArticles = 8;

  $http.get('api/tags.json').
  success(function(data, status, headers, config) {
    $scope.articleTags = data;
  }).
  error(function(data, status, headers, config) {
        // log error
      });
  $http.get('api/articles.json').
  success(function(data, status, headers, config) {
    $scope.articles = data;
  }).
  error(function(data, status, headers, config) {
        // log error
      });
  $http.get('api/lunr-index.json').
  success(function(data, status, headers, config) {
    // $scope.lunrIndex = data;
    $scope.lunrData = data;
    $scope.lunrIndex = lunr.Index.load(data.index);
  }).
  error(function(data, status, headers, config) {
        // log error
      });
  $scope.stringToDate = function(item) {
    return moment(item).format('YYYY-MM-DD');
  };
  $scope.searchResults = function(searchInput) {
    return $scope.lunrIndex.search(searchInput);
  }



});

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
      $window.location.href="/members"; 
    }).catch(function(error) {
      if (error.toString().indexOf("password is incorrect") > -1) {
       $scope.accountError = "password is incorrect";
     } else if (error.toString().indexOf("user does not exist") > -1) {
       $scope.accountError = "user does not exist, maybe you want to signup?";
     } else {
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
$scope.openLink = function(linkToOpen) {
  $window.location.href = linkToOpen;
}
$scope.makeDateSortable = function(input) {
  return moment(input).format("YYYY-MM-DD");
}

/**
    Smoothly scroll element to the given target (element.scrollTop)
    for the given duration

    Returns a promise that's fulfilled when done, or rejected if
    interrupted
    */
    var smooth_scroll_to = function(element, target, duration) {
      target = Math.round(target);
      duration = Math.round(duration);
      if (duration < 0) {
        return Promise.reject("bad duration");
      }
      if (duration === 0) {
        element.scrollTop = target;
        return Promise.resolve();
      }

      var start_time = Date.now();
      var end_time = start_time + duration;

      var start_top = element.scrollTop;
      var distance = target - start_top;

    // based on http://en.wikipedia.org/wiki/Smoothstep
    var smooth_step = function(start, end, point) {
      if(point <= start) { return 0; }
      if(point >= end) { return 1; }
        var x = (point - start) / (end - start); // interpolation
        return x*x*(3 - 2*x);
      }

      return new Promise(function(resolve, reject) {
        // This is to keep track of where the element's scrollTop is
        // supposed to be, based on what we're doing
        var previous_top = element.scrollTop;

        // This is like a think function from a game loop
        var scroll_frame = function() {
          if(element.scrollTop != previous_top) {
            reject("interrupted");
            return;
          }

            // set the scrollTop for this frame
            var now = Date.now();
            var point = smooth_step(start_time, end_time, now);
            var frameTop = Math.round(start_top + (distance * point));
            element.scrollTop = frameTop;

            // check if we're done!
            if(now >= end_time) {
              resolve();
              return;
            }

            // If we were supposed to scroll but didn't, then we
            // probably hit the limit, so consider it done; not
            // interrupted.
            if(element.scrollTop === previous_top
              && element.scrollTop !== frameTop) {
              resolve();
            return;
          }
          previous_top = element.scrollTop;

            // schedule next frame for execution
            setTimeout(scroll_frame, 0);
          }

        // boostrap the animation process
        setTimeout(scroll_frame, 0);
      });
}

$scope.scrollToId = function(targetId) {
  // prep for scrolling
}


}]);

app.filter('filterByTags', function () {
  return function (items, tags) {
        var filtered = []; // Put here only items that match
        (items || []).forEach(function (item) { // Check each item
            var matches = tags.some(function (tag) {          // If there is some tag
              // console.log("item = " + item);
              return (item.tags.indexOf(tag.text) > -1)
            });                                               // we have a match
            if (matches) {           // If it matches
                filtered.push(item); // put it into the `filtered` array
              }
            });
        return filtered; // Return the array with items that match any tag
      };
    });
app.filter('filterByTag', function () {
  return function (items, tag) {
    if (tag) {

        var filtered = []; // Put here only items that match
        (items || []).forEach(function (item) { // Check each item
          // console.log(item);

          item.tags.forEach(function(t) {
            // console.log("t = " + t);
            // console.log("tag = " + tag);
            if (t === tag) {
              filtered.push(item);
            }
          });
        });
        return filtered; // Return the array with items that match any tag
      } else return items;
    };
  });





/***************** ***********************/
/*
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
    .controller('ArticlesCtrl', function($scope, $http, $window) {
    $http.get('api/articles.json').
      success(function(data, status, headers, config) {
        $scope.articles = data;
      }).
      error(function(data, status, headers, config) {
        // log error
      });
    $scope.go = function ( path ) {
        // $location.path( path );
        $window.open( path, "_self" );
      };

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


*/