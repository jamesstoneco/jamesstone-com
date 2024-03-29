---
title: The 5 Secrets of Sass Foundation
date: 2014/04/10
time: 16:23 PM CET
tags: foundation-sites, angular
featured_image: "/blog/featured-images/sass-secrets.jpg"
outline:
 - heading: "Unbound Variable Error"
   id: "secret-1"
 - heading: "$include-html vs. @import"
   id: "secret-2"
 - heading: "Sass vs. Scss vs. CSS"
   id: "secret-3"
 - heading: "Compass and Sass vs. Libsass and Grunt"
   id: "secret-4"
 - heading: "_settings.scss vs. app.scss"
   id: "secret-5"
 - heading: "Bonus Secret"
   id: "secret-6"
---

Recently I had a lot of really great questions on my [Getting Sassy with ZURB Foundation 5 Screencast](https://www.youtube.com/watch?v=Gx-9cgNlZlQ) and I started thinking about what kinds of things are important to know.SPLIT\_SUMMARY\_BEFORE\_THIS

In this article I give you my 5 best secrets, 6 if you count the bonus, of how I work with Sass in ZURB Foundation 5.

<a name="secret-1"></a>
<h2 data-magellan-destination="secret-1">1. Unbound Variable Error</h2>

Have you ever seen an error like <span class="inline-code">unbound variable $include-html-classes</span>. The problem here is that your variable, in this case $include-html-classes has not been defined yet. 

Usually, you need to go to your settings.scss file and scroll up and find that variable. Once you find it, just uncomment it but don't change the value.

Thats it.

Just repeat for as many variables as needed.

<a name="secret-2"></a>
<h2 data-magellan-destination="secret-2">2. $include-html vs. @import</h2>

This might seem redundant but they actually have two separate uses. First the @import statements allow you to turn on and off an entire set of Foundation components. This is a great way to optimize your site and improve its performance. In fact, I dedicate an entire chapter to describing this method in my [ZURB Foundation Front-end Performance Guide][1] (still in beta).

But what about the $include-html and other $include Sass variables? At first glance it appears that this does the same thing. It does not. What this does is to turn of the presentational classes from being generated, for the entire framework in the case of $include-html or for each specific component.

Why would you want to do that? This is if you want to use Sass mixins only on your own custom classes and markup. Keep in mind you if you remove the @import for your component you also remove access to that components Sass mixins.

<%= partial(:tweetthis, :locals => {:quote => "So, you can mix and match or go full on Sass only"}) %>

So, you can mix and match or go full on Sass only. Its your choice and the ZURB Foundation framework offers you a ton of flexibility in this regard.


<a name="secret-3"></a>
<h2 data-magellan-destination="secret-3">3. Sass vs. Scss vs. CSS</h2>

You will see these terms thrown around a lot and I am guilty of it myself. Sass is the language that builds upon CSS and gives you awesome things such as variables and mixins. Scss is a special file format that uses Sass with a CSS style syntax. That means curly braces { } and semi-colons ;

But, wait, isn't Sass a special format too? Sure is, if you see a .sass formatted file it removes the curly braces and semi-colons and uses tabs instead to define its hierarchy. It's pretty and very readable. But it is also another format to have to onboard your developers too. 

So which should you use?

ZURB Foundation uses .scss file which is why I use them too. They are easier for developers or designers with CSS experience to understand and make modifications too. I stick with them because I use ZURB Foundation all the time and I don't want to mix and match formats in the same project.

<%= partial(:tweetthis, :locals => {:quote => "ZURB Foundation uses .scss file which is why I use them too"}) %>


<a name="secret-4"></a>
<h2 data-magellan-destination="secret-4">4. Compass and Sass vs. Libsass and Grunt</h2>

If you are new to Foundation in version 5 you might be wondering what all the talk is about Compass/Sass and Libsass/Grunt.  The short is that Libsass/Grunt is a Node/NPM workflow that compiles your ZURB Foundation project faster. How much faster, [up to 32x faster in most cases][2].  I find that using this workflow compiles in about a 1/2 second on my mac mini.


To get started with this method, create a new project with the --libsass flag.

    foundation new myProject --libsass

To compile your sass files automatically, run

    grunt watch

Compass and Sass is the old workflow from Foundation 4 and is based on Ruby. You can install compass with <span class="inline-code">gem install compass</span>. This is the default option and a great way to get started with ZURB Foundation. To create a new project, just leave the --libsass flag off. One reason you might want to do this is if you plan on using other sass libraries or mixins that might not be compatible with the bleeding edge libsass.

To create a new project run

    foundation new myProject

To compile your sass files automatically, run the following from your project directory

    compass watch

Now every time you change a file your sass will automatically update your generated CSS files. Of course, by sass I mean scss.

Results:

    +-----------------+-------+-------+-----+-------+
    | command         | user  | sys   | cpu | total |
    +-----------------+-------+-------+-----+-------+
    | compass compile | 2.29s | 0.15s | 77% | 3.160 |
    | grunt build     | 0.51s | 0.10s | 37% | 1.615 |
    +-----------------+-------+-------+-----+-------+

Yes, that is almost 4.5x faster and with less cpu usage.


<a name="secret-5"></a>
<h2 data-magellan-destination="secret-5">5. _settings.scss vs. app.scss</h2>

Another point of confusion is the two main sass files that ship with ZURB Foundation. Lets start with app.scss.

So, app.scss is the main file that generates your CSS files. Everything, including the \_settings.scss file are included here. So one way to think of it is that the \_settings.scss is a child of app.scss.

In your app.scss you @import your \_settings.scss and all of your foundation components. By default this is a file called \_foundation.scss which is imported with <span class="inline-code">@import "foundation"</span>. If you want to take a look at how all this works, jump over to your bower\_components directory and take a look. This file basically imports each an every component in the list that is commented out below.

If you want to get higher performance out of your project, you will want to comment out or remove this <span class="inline-code">@import "foundation"</span> reference and access the components directly below. Then you can comment out components that you are not using and reduce the size of your outputted CSS.

The other thing that you will want to use app.scss for is to hold all of your custom styles for the project. I usually start by adding styles to the end of this document and then I will refactor and move classes to a specific file to @import as the project gets bigger. 

Now, what about \_settings.scss? This file is a collection of commented out Sass variables that are used to change the default look and behavior of ZURB Foundation. This is your first stop to customization in Foundation. If you can't do what you need here, then you need to look at creating a custom class in your app.scss.

If you have watched my [Sass + Foundation Screencast][3] then you will know that my preferred method is to duplicate the commented out lines, then uncomment the duplicate and change your settings. That way you can always go back to the defaults if you make a mistake and it is clear what changes you made. 

<a name="secret-6"></a>
<h2 data-magellan-destination="secret-6">6. Bonus Secret</h2>

I know, I said 5 secrets, but I am going to let you in on one more trick here. 

So, I will often use variables such as $primary-color in my app.scss. This is totally fine, because you have to remember, the variables are loaded in the order that they appear in your app.scss. So if I load \_settings.scss first, then all I need to do is uncomment that variable in order to use it.

Well, what happens if I want use my own variables inside of the \_settings.scss? And, why would I want to do that anyways?

Well, on most projects I want to have more colors than just the $primary-color and $secondary-color that are defined by Foundation. In this case I create a new variable and give it a name at the top of my app.scss above the @import "settings" line. Here is an example of what I might have:

    $project-white: #fff;
    $project-blue: #00f;
    $project-light-blue: lighten(#00f, 20%);

    ...
    
    @import "settings";
    @import "foundation";
    
    ...
    
    // my custom classes below
    
    ...

Then, in my \_settings.scss I might set <span class="inline-code">$primary-color</span> to <span class="inline-code">$project-blue</span>, where project is just a prefix for the project that I am working on. 

So these are my secrets to working with Foundation Sass. Dealing with the unbound variable error, understanding $include vs @import, Sass vs Scss, Compass vs. Grunt and what the difference is betweet app.scss and \_settings.scss. Also, I gave you a little tip about how I inject my own variables into \_settings.scss and gave you an example of not only how but why I do this.

So do you use Sass Foundation in your web development workflow? Do you have any other Sass Secrets? Do you have any questions? If so I would love to hear fro myou in the comments.

If you enjoyed this article you might also like my [ZURB Foundation Front-end Performance Guide][4]. It is still in Beta but I am quickly compiling a short guid that shows you exactly how to make ZURB Foundation sites and apps run as fast and humanly possible.



[1]:  https://leanpub.com/zurb-foundation-performance-guide
[2]:  /blog/compass-sass-vs-sassc-for-zurb-foundation-4
[3]:  https://www.youtube.com/watch?v=Gx-9cgNlZlQ
[4]:  https://leanpub.com/zurb-foundation-performance-guide