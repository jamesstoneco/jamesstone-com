// FOUNDATION FOR APPS TEMPLATE GULPFILE
// -------------------------------------
// This file processes all of the assets in the "client" folder, combines them with the Foundation
// for Apps assets, and outputs the finished files in the "build" folder as a finished app.

// 1. LIBRARIES
// - - - - - - - - - - - - - - -

var gulp           = require('gulp'),
    rimraf         = require('rimraf'),
    runSequence    = require('run-sequence'),
    // frontMatter    = require('gulp-front-matter'),
    // sass           = require('gulp-ruby-sass'),
    uglify         = require('gulp-uglify'),
    concat         = require('gulp-concat'),
    connect        = require('gulp-connect'),
    path           = require('path');
    // modRewrite     = require('connect-modrewrite'),
    // dynamicRouting = require('./bower_components/foundation-apps/bin/gulp-dynamic-routing');

// 2. SETTINGS VARIABLES
// - - - - - - - - - - - - - - -

// These files include Foundation for Apps and its dependencies
var foundationJS = [
  'bower_components/fastclick/lib/fastclick.js',
  'bower_components/viewport-units-buggyfill/viewport-units-buggyfill.js',
  'bower_components/tether/tether.js',
  'bower_components/angular/angular.js',
  'bower_components/angular-animate/angular-animate.js',
  'bower_components/ui-router/release/angular-ui-router.js',
  'bower_components/foundation-apps/js/vendor/**/*.js',
  'bower_components/foundation-apps/js/angular/**/*.js'
];
// 3. TASKS
// - - - - - - - - - - - - - - -

// Cleans the build directory
gulp.task('clean', function(cb) {
  rimraf('./source/javascripts/foundation-apps', cb);
});

// Copies user-created files and Foundation assets
gulp.task('copy', function() {
  // Iconic SVG icons
  gulp.src('./bower_components/foundation-apps/iconic/**/*')
    .pipe(gulp.dest('./source/assets/img/iconic/'));

  // Foundation's Angular partials
  return gulp.src(['./bower_components/foundation-apps/js/angular/partials/**.*'])
    .pipe(gulp.dest('./source/partials/'));
});

// Compiles and copies the Foundation for Apps JavaScript, as well as your app's custom JS
gulp.task('uglify', function() {
  // Foundation JavaScript
  gulp.src(foundationJS)
    .pipe(uglify({
      beautify: true,
      mangle: false
    }).on('error', function(e) {
      console.log(e);
    }))
    // .pipe(concat('foundation.js'))
    .pipe(gulp.dest('./source/assets/js/'))
  ;
});

// Builds your entire app once, without starting a server
gulp.task('build', function() {
  runSequence('clean', ['copy', 'uglify'], function() {
    console.log("Successfully built.");
  })
});

