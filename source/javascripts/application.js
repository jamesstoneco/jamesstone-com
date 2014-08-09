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
//= require jquery/dist/jquery
//= require fastclick/lib/fastclick
//= require foundation/js/foundation
//= require foundation/js/foundation/foundation.abide
//= require foundation/js/foundation/foundation.accordion


// require foundation/js/foundation/foundation.alert

// move this to specific pages on blog, load on the fly
// require foundation/js/foundation/foundation.clearing

// require foundation/js/foundation/foundation.dropdown
// require foundation/js/foundation/foundation.equalizer
// require foundation/js/foundation/foundation.interchange
// require foundation/js/foundation/foundation.joyride
// require foundation/js/foundation/foundation.magellan
// require foundation/js/foundation/foundation.offcanvas
// require foundation/js/foundation/foundation.orbit
//= require foundation/js/foundation/foundation.reveal
// require foundation/js/foundation/foundation.slider
// require foundation/js/foundation/foundation.tab
// require foundation/js/foundation/foundation.tooltip
// require foundation/js/foundation/foundation.topbar
//= require vendor/highlight
// require vendor/processing
// move this to specific pages on blog, load on the fly
//= require vendor/socialite/socialite
//= require_directory .

$(document).foundation();

$(".card.article, .sidebar-test").click(function(){
	window.location = $(this).find("a:first").attr("href");
	return false;
});

// Show URL on Mouse Hover
$(".card.article, .card.product, .sidebar-test").hover(function () {
	window.status = $(this).find("a:first").attr("href");
}, function () {
	window.status = "";
});
$(".front").click(function(){
	$( "div.flip-container" ).toggleClass( "flip" )
});


Socialite.load("blog-social");
hljs.initHighlightingOnLoad();

// ga code below

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-19284762-1', 'jamesstone.co');
ga('send', 'pageview');


// getdrip below
var _dcq = _dcq || [];
var _dcs = _dcs || {}; 
_dcs.account = '6233478';

(function() {
var dc = document.createElement('script');
dc.type = 'text/javascript'; dc.async = true; 
dc.src = '//tag.getdrip.com/6233478.js';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(dc, s);
})();
