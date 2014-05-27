---
title: ZURB Foundation 5.3 Released
date: 2014/05/28
time: 0:30 AM PST
tags: ZURB Foundation, Version, Release, Responsive Web Design, Web Design, Mobile, Video
featured_image: "/blog/featured-images/5point3.jpg"
signup_zurb: "true"
published: false
---

Working with the grid can certainly lead to frustration. Working with 3 can make you a little crazy. In this article I explain my workflow with the ZURB Foundation grids. SPLIT\_SUMMARY\_BEFORE\_THIS

the grid can definitely be confusing at first. I know I was confused a bit when I started with Foundation. I have a video on youtube that you might find useful where I try and explain the grid.

https://www.youtube.com/watch?v=kk6KpKK5Jjc

The bad news: its all about math.
The good news: the math is not that bad.

Foundation by default is 12 columns wide. This is a pretty smart number. Most of the time you might do things such as full width (.large-12.columns), 2-up (.large-6.columns), 3-up or 3 column (.large-4.columns) 4-up or 4 column (.large-3.columns).

Of course, there are other variations on that, a 2/3 split (.large-4.columns + .large-8.columns) and everything in between but these are the basic patterns that you will find. Often, more complex Foundation layout are just nesting these structures inside of each other.

Which brings us to the fact that you have 3 grids in foundation, small, medium and large. These relate to media queries and breakpoints if you want to get into it. But the idea is basically on small devices such as the iphone you get the small grid, tablets both landscape and portrait you get the medium grid and everything else gets the large grid. On really large monitors the large grid is centered leaving white space off to either side.

So 3 grids each on a grid. Where do you start. Here is my current process.

1) do I want the medium grid on tablets to be the same as the large grid on desktop. Usually the answer is yes. So I use the medium grid.

.medium-4.columns

If I only use the medium grid, then the large grid matches the same size. So 4 columns wide on both. If I do not specify a small grid, it will always be 12 columns wide, or full width. This is the default stacking you see on Foundation or, ahem, other similar frameworks.

If I want the tablet grid to mimic the small / mobile grid instead I use the large grid.

.large-4.columns

in this case the medium grid will match the small grid and will be full width, 12 columns wide. So stacking on both.

Now, if I want all 3 to be the same, I would use the small / mobile grid.

.small-4.columns

Now everything is the same. Also, this is how you could start if you want to go Mobile First.

So, I usually do one pass, often Desktop First. Sometimes I work Mobile First. But in the case of desktop first, I go through these questions just like this.

Then I do a 2nd pass. I call this mobile refinement. I view the page in a iphone 3g simulator on chrome and I start adding .small-n.columns classes to redefine the layout for mobile. To make it work well and to go beyond the basic stacking. Here are some examples of things I typically change:

1) make images not full width, usually that is way to big and I usually go small-4 or small-6
2) shrink other small elements that are being stretched to much. sometimes I will use a .small-10.small-centered or something like that to center a button and make it fit better in the layout.
3) put things side by side if there is enough room and it works well

I usually go beyond the grid at this point and might also look at using visibility classes or other elements to really refine the ui/ux on mobile.

Then I do a 3rd pass. This is for tablets. same thing applies. Just add .medium-n classes to change the way things look. Sometimes this is a small refinement, sometimes it is larger.

I know this is lengthy, but I think if you take a look at the video and go through this process you will have the grids down pretty good.

Good luck. Let me know if you have any other questions.


## Additional Resources:

Last December I put together a [short video on how to use Grids in Foundation](https://www.youtube.com/watch?v=kk6KpKK5Jjc) and put it up on YouTube. Today it has been watched by over 9,000 people and it has led to a lot of discussion over my workflow.

I recently answered a question in ZURB Foundation Forum that some people have found useful. If you find it useful, don't forget to hit the helpful button.