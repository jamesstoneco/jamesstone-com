---
title: ZURB Foundation 5 Grids Redux
date: 2014/05/27
time: 11:44 AM CET
tags: ZURB Foundation, Grids, Responsive Web Design, Web Design, Mobile, Video
featured_image: "/blog/featured-images/grids3.jpg"
signup_zurb: "true"
---

Working with the grid can certainly lead to frustration. Working with 3 can make you a little crazy. In this article I explain my workflow with the ZURB Foundation grids. SPLIT\_SUMMARY\_BEFORE\_THIS

I remember when I first started with Foundation I was confused about the grids as well. Sure, I had used grid systems in design but there was this whole lineage of grid 960 that I had missed out on.

Not only that, grids and the way that they are used in responsive design aren't really grids at all. It is maybe better to think of them as columns.

On [Stack Overflow I kept seeing a lot of questions dealing with the grids](http://stackoverflow.com/users/1560583/jamesstoneco?tab=answers&sort=votes). They were a major part of confusion for a lot of users.

To try and answer these questions in a simple and understandable way, I jumped into Sublime Text and put together a short screencast. Today that video has been viewed by over 9,000 people since I posted it in Decemeber.

<div class="flex-video widescreen"><iframe width="960" height="720" src="//www.youtube.com/embed/kk6KpKK5Jjc?rel=0" frameborder="0" allowfullscreen></iframe></div>

Today, I will take the ideas in this video further by explaining my workflow more in detail.

## The bad news: it's all about math
## The good news: the math is not that bad

Foundation by default is 12 columns wide. **This is a pretty smart number**. 

About 95% of the time you use the following patterns:

*  <span class="inline-code">.large-12.columns</span> full width
*  <span class="inline-code">.large-6.columns</span> 2-up or 1/2 width
*  <span class="inline-code">.large-4.columns</span> 3-up or 3 column
*  <span class="inline-code">.large-3.columns</span> 4-up or 4 column
*  <span class="inline-code">.large-4.columns + .large-8.columns</span> fake golden ratio* 2/3 split

Often, more complex Foundation layouts are just a matter of nesting these structures inside of each other. 

When you start to do things such as <span class="inline-code">.large-1.columns</span> + <span class="inline-code">.large-5.columns</span> + <span class="inline-code">.large-2.columns</span> ask yourself, "Can this be made simpler by nesting grids?" Often the answer is yes.

## 3 grids: small, medium and large

These grids specifically relate to media queries and breakpoints if you want to dive deeper.

The basic idea is that on small devices such as the iPhone you get the small grid, tablets both landscape and portrait you get the medium grid and everything else gets the large grid. On really large monitors the large grid is centered leaving white space off to either side.

So 3 grids each in theory representing a different device or use case. **Where do you start?** 

Here is my current process. I always ask myself these questions as I am writing the grid.

## Question 1: What is the relationship I want for the grid?


### Answer 1: I want the Medium and Large grids to match. This is the case 90% of the time.

If I only use the medium grid, then the large grid matches the same size. So 4 columns wide on both. If I do not specify a small grid, it will always be 12 columns wide, or full width. This is the default stacking you see on Foundation or, ahem, other similar frameworks.

    .medium-4.columns

### Answer 2: I want the medium grid to match the small grid, meaning stacked by default.

If I want the tablet grid to mimic the small / mobile grid instead I use the large grid.

    .large-4.columns

In this case the medium grid will match the small grid and will be full width, 12 columns wide. So stacking on both.


### Answer 3: I want all grids to be the same.

Now, if I want all 3 to be the same, I would use the small / mobile grid:

    .small-4.columns

Now everything is the same. Also, this is how you might start if you want to go [Mobile First](/blog/mobile-first-and-why-you-should-care). This is more advanced, so approach it with caution.

## Desktop First Phase (or Mobile First)

I usually do one pass, often working Desktop First. 

Sometimes I work Mobile First. But either way I use the set of above questions to define how I will use the grid. I try and only set one grid: small, medium or large in this phase.

I would say in general, I spend about 80% of my time in this phase.

Once I am happy with the layout and everything else I move on to what I call the mobile refinement phase.

## Mobile Refinement Phase

Here I do a 2nd pass. I call this mobile refinement.

I view the page in a iPhone 3g simulator on chrome and I start adding <span class="inline-code">.small-n.columns</span> classes to redefine the layout for mobile.

In my opinion resizing the browser can lead to problems later on. If you are designing for 320 pixels wide you should simulate that as soon as possible. It will allow you to see if your elements fit well and make corrections right away.

The goal here is to make everything work well together, to go beyond the basic stacking and provide a great mobile ui/ux.

Here are some examples of things I typically change:

* Reduce the width of images, usually that is way to big and I usually go <span class="inline-code">.small-4</span> or <span class="inline-code">.small-6</span>
* Shrink other small elements that are being stretched. Often I will use <span class="inline-code">.small-10.small-centered</span> to center a button and make it sit better in the layout.
* Put elements side by side if there is enough room and it works well

I usually go beyond the grid at this point and might also look at using visibility classes or other elements to really refine the ui/ux on mobile.

I probally spend 15% of my time working in this phase.

## Tablet Refinement Phase

Then I do a 3rd pass. This is for tablets. 

Same thing applies. Just add <span class="inline-code">.medium-n</span> classes to change the way things look. Sometimes this is a small refinement, sometimes it is larger.

For me this is the shortest phase in the workflow. Before I used to just worry about the desktop grid and this would take much longer.

Now, I can make some decisions up front that save me a lot of time and provide a pretty good tablet ui/ux before coming to refine it.

## In conclusion

So there you have it, this is my basic workflow using presentational classes with ZURB Foundation 5. What about you? Do you have a different workflow that is working well for you? Do you think 3 grids is enough or too much for modern responsive web design? Let me know in the comments, I would love to hear from you.


## Additional Resources:

Here is the direct link to the [short video on how to use Grids in Foundation](https://www.youtube.com/watch?v=kk6KpKK5Jjc). There is some great questions and discussion about the video on the YouTube page.

This post was inspired by [a question I answered in the ZURB Foundation Forum](http://foundation.zurb.com/forum/posts/13360-multiple-columns-sizes-on-a-div) that some people have found useful. If you find it useful as well, don't forget to hit the helpful button.

