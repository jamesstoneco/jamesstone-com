---
title: 5 ways to use ZURB Foundation 5
date: 2015/05/05
time: 8:10 PM PST
tags: foundation-sites, angular
featured_image: "/blog/featured-images/five-ways.svg"
featured_image_wide: "/blog/featured-images/five-ways-wide.svg"
outline:
 - heading: "1. CSS + Javascript Download"
   id: "way-1"
 - heading: "2. Sass or SCSS"
   id: "way-2"
 - heading: "3. Semantic Mixins"
   id: "way-3"
 - heading: "4. Sass Only"
   id: "way-4"
 - heading: "5. Angular-Foundation"
   id: "way-5"
 - heading: "Which one should I use?"
   id: "which-one"
---

This article discusses the 3 official ways of using ZURB Foundation and 2 unofficial but equally powerful ways. SPLIT\_SUMMARY\_BEFORE\_THIS
At the end of each section I will highlight the pros and cons for each approach. If you have any questions, feel free to leave a comment at the end.

<div class="wedgie-widget" data-wd-pending data-wd-type="embed" data-wd-version="v1" id="5560c1e6a858b9080001bd62" style="max-width: 640px; margin: 0px auto; width: 100%;"></div>

<a name="way-1"></a>
<h2 data-magellan-destination="way-1">#1. CSS + Javascript Download</h2>


If you are new to Web Development or ZURB Foundation this is likely the way you have used ZURB Foundation. It was the first way I used it and it is the gateway drug for bigger and better things such as Sass, Semantic HTML and Google Angular.

To use this, basically you just download a copy from the [ZURB Foundation Download Page](http://foundation.zurb.com/develop/download.html) or use the [custom generator](http://foundation.zurb.com/develop/download.html#customizeFoundation). You can even do some optimization later by changing some of these settings. If you find yourself doing this a lot, then you are going to love the Sass/Scss version, coming up in the next section.

So to use this variant of ZURB Foundation there are no dependancies. You just get HTML (examples/boilerplate), CSS and JavaScript. Everything is minimized and pretty much ready to go. So if you are just starting out and learning the presentational classes, this is hands down the best way to go.

But in addition to being perfect for beginners, there are a couple of other use cases that make this perfect.

[CodePen](http://codepen.io) is a good example. CodePen lets you build complete responsive ZURB Foundation based pages and examples in a way that you can embed them on your site, showcase the code and have people fork them. Its kind of a hybrid of YouTube style embeds meeting Github Gists and a Text Editor to show off your front-end code.

There is an [example project](http://codepen.io/ZURBFoundation/pen/GJjVpE) that you can just fork to get started, or all you need to do is to point your CSS + JavaScript settings at the appropriate CDNs.

<p data-height="655" data-theme-id="11644" data-slug-hash="GJjVpE" data-default-tab="result" data-user="ZURBFoundation" class='codepen'>See the Pen <a href='http://codepen.io/ZURBFoundation/pen/GJjVpE/'>Navigation Example</a> by ZURB Foundation (<a href='http://codepen.io/ZURBFoundation'>@ZURBFoundation</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

In my latest email course I use CodePen examples extensively to showcase how different aspects of ZURB Foundation work.

So if you ever use anything like CodePen where you don’t have a lot of configurability under the hood, this version of ZURB Foundation can help out in a pinch.

Pros:

* easy
* works with nearly everything
* just about zero setup time

Cons: 

* can be bloated
* not very flexible
* you end up overriding a lot of CSS

<a name="way-2"></a>
<h2 data-magellan-destination="way-2">#2. Sass or SCSS</h2>

Sass and SCSS are used almost interchangeably, but the word you will hear used the most is Sass. Scss is just a CSS Syntax style variant of Sass and is fully compatible with existing CSS files if you were wondering.

If you customized colors and components in the CSS version of Foundation you are going to love this. This basically gives you access to those variables and much much more.

Now you can customize the color of basically every ZURB Foundation component, turn things on and off with the flip of a switch and end up with efficient minified custom.

This goes way beyond merely colors and much like the [wizard behind curtain in the Wizard of Oz](https://www.youtube.com/watch?v=NZR64EF3OpA) where you can pull levers (set variables) and change just about every aspect of ZURB Foundation from the number of grid columns (don’t change that) to the padding of components to completely not rendering entire components.

However, with this great power comes also comes great risks. Ok, maybe some risks.

Make sure you back your original variables so if you change something and hose your project, you can always go back.

Pros:

* can be lean + optimized
* allows you to organize your CSS into separate files
* reusable code via variables + mixins
* same presentational css class names as above

Cons

* you have to setup ruby/gem, node/npm, grunt, bower, etc.
* you can break things
* you will need to likely pre-compile and create a build pipeline, more work

<a name="way-3"></a>
<h2 data-magellan-destination="way-3">#3. Semantic Mixins</h2>

Largely the Holy Grail in web developer circles, this is like [CSS Zen Garden](http://www.csszengarden.com) on steroids. The idea is that you only use classes (and html5 elements) to describe the information purely and do not describe the presentational (visual) aspect of them at all. If you want a deeper introduction, [check out this article on wikipedia](http://en.wikipedia.org/wiki/Semantic_HTML).

Sounds great, but there is one caveat. Right now you still have to clear your floats. So until flex-box becomes part of Foundation for Sites (hopefully in version 6, keeping fingers crossed) you are going to have to come up with some “logical argument” to have your grid rows. Quotes indicating sarcasm here.

Other than that, you can basically use the entirety of the framework with your own class names. Want to use \<footer\> and \<section\>? Go crazy, you can really do just about anything you can dream up.

Having said that, you will have to plan a bit more and think more about how you want to organize the information on the page.

There are really two approaches to this. 1) Write your presentational classes first, organize and then refactor semantically or 2) go full on semantic first.

If you chose the later you will likely want 3 windows visible at any given time. 1) your browser window, ideally auto-reloaded 2) your html so you can define the structure and 3) your Sass/Scss file because you will want to likely apply mixins immediately to see how they look. Otherwise you are going to be flipping windows like crazy.

Pros:

* street cred
* potentially better SEO and accessibility
* strong attention to craft

Cons:

* creates another layer of abstraction
* bad decisions and lock you into technical debt
* not as well documented as the presentational classes

<a name="way-4"></a>
<h2 data-magellan-destination="way-4">#4. Sass Only</h2>

Another less advertised way to work with Foundation is to go Sass only. This basically means removing all components that have a JS by their name in the official docs.

Sure you won’t have fancy sliders and modals, but who needs those things anyways. If you are building a lean and mean conversion pipeline or sales funnel, this will be the fastest way to get there.

Because you can use the presentational class with the benefit of the added performance of zero javascript and streamlined CSS it can really help out in your UX without a lot of drawbacks.

If you are looking for high interactivity, this is the polar opposite.

Pros:

* performant
* better compatibility because it is only CSS
* don’t have to worry about JavaScript errors breaking your page

Cons:

* limited number of components
* static interactivity
* may not fit all needs


<a name="way-5"></a>
<h2 data-magellan-destination="way-5">#5. Angular-Foundation</h2>

Probably one of the coolest ways to use Foundation which is also not well know is the [Angular-Foundation project](http://pineconellc.github.io/angular-foundation). Basically what they have done is to rewrite all of the jQuery based JavaScript Foundation components as Angular based directives and accompanying templates.

This is fantastic because one of the big drawbacks of using ZURB Foundation, or another jQuery based Framework that binds on DOM Ready, is that when your templates reflow the DOM, all of your bindings typically break. No fun.

Of course a common solution to this is to re-instationate Foundation (or bootstrap or whatever your poison is) after you reflow the DOM, in Angular this is typically handled in the link function, but imo it is not the most refined solution.

First of all you end up loading both Angular and jQuery 2 which is wasteful in itself. Secondly, you are dealing with possible lag as Foundation reads all of the data-attributes and in a sense reflows the DOM itself. Finally, your interaction is limited with Foundation components and you end up reinventing the wheel a bunch, for better or for worse.

Angular-Foundation largely solves this by creating native Google Angular directives that not only have no jQuery dependencies, but also build upon the default CSS generated by Foundation Sass.

Pros

* Best current solution for Angular based Marketing sites + apps (see [Foundation for Apps](http://foundation.zurb.com/apps) for, you got it, apps)
* Examples on how to pass $scope and data around
* Port of the more mature Angular Bootstrap Project

Cons

* Difficult to use if you are not up to speed on Angular
* Documentation is limited
* Implementation takes much longer than standard jQuery based Foundation, assuming you are not using Angular


<a name="which-one"></a>
<h2 data-magellan-destination="which-one">In conclusion, which one should I use?</h2>

Like in most things engineering related, the answer is it depends. 

If you are new to web development or Foundation in general I recommend you start with the CSS downloadable version. Then as you become more advanced and set up a proper dev environment to support it, try and transition to the sass version as soon as possible.

This will be good news for you if you ever end up using Ruby/Ruby on Rails/Middleman or anything else that uses the sprockets asset pipeline. For everything else I would recommend using the —lib-sass flag and accompanying grunt workflow.

From there you can experiment by going semantic or sass only depending on your project requirements. If you are fired up about Angular, you might want to jump right into Angular-Foundation (while keeping a close eye on ZURB Foundation for Apps).

So you might be thinking, what about situation x. What about framework y. What about ember, backbone, etc. Well, this article isn’t meant to be exhaustive, but just to give a good idea of some of the more frequent modes of Foundation I tend to use myself and see in the wild. 

If you are a mature project maintainer of one of the above, I would love to hear from you in the comments. I promise to take a look and if it seems promising write about it in a future article.

If you have a question about any of these setups or if you are not sure where to get started, leave me a comment and I will try and steer you in the right direction.

<script src="https://www.wedgies.com/js/widgets.js"></script><noscript><a href="https://www.wedgies.com/question/5560c1e6a858b9080001bd62">Which of the 5 ways to use ZURB Foundation are you going to use on your next project?</a></noscript><div class="wedgie-widget" data-wd-pending data-wd-type="embed" data-wd-version="v1" id="5560c1e6a858b9080001bd62" style="max-width: 640px; margin: 0px auto; width: 100%;"></div>

