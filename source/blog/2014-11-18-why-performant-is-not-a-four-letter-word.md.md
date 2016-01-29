---
title: Why performant is not a four letter word
date: 2014/11/18
time: 8:30 AM PST
featured_image: "/blog/featured-images/performance.svg"
featured_image_wide: "/blog/featured-images/performance-wide.svg"
highlights: 
 - Why my site slowed down
 - How slow did it get
 - Widgets and embeds were to blame
 - Before + after comparison
---

On launch performance is critical. But, over time, all sites tend to get bloated, even this one. The question is, what do you do when it happens?

SPLIT\_SUMMARY\_BEFORE\_THIS

It can be quite difficult sometimes to get buy in on pushing the performance of the site. Sure there are great statistics that show that faster load times increase conversions and SEO rankings but often people don’t want to invest the time into tuning their site or app for performance.

As a developer I am always interested to see what is going on under the hood. When a see a new site I often open up Chrome Dev Tools to see how it was built. Often my next step is to check out the performance using one of my favorite tools, tools.pingdom.com. The reality here is I am often comparing to my own site and seeing how I stack up.

So what happens when your once screaming fast site starts to get slower and slower. Well, in my case, I am hosting with BitBalloon. BitBalloon is an amazingly fast CDN based hosting solution for statically generated sites such as this one. I use Middleman to build my blog in a private GitHub repo and can push my changes up with a simple git push origin master.

With my hosting being top shelf that really only leaves myself to blame. Lets take a look at what was happening historically.

## Historical Load Time

![Pingdom Tools Report of Historical Page Load Time](../../images/blog/2014/performance/jamesstone-page-load-time.jpg)

Lower is better. Notice that the site was now taking nearly 3 times as long to load.

## Historical Page Size vs. Number of Connections

![Pingdom Tools Report of Historical Page Size vs. Number of Connections](../../images/blog/2014/performance/jamesstone-page-size-requests.jpg)

Lower is better in both cases. You will see there seems to be a direct correlation between the number of connections and the size of the site. The site historically has gotten larger in size and has increased the number of connections.

So after looking at these I had a pretty good idea what was causing a majority of the slowdown on the home page. I had added two widgets: a YouTube embed and a widget from Clarity.fm. In the future I am going to be a lot more cautious about adding such things to my site.

Turns out, the YouTube embed uses a ton of resources and in my use case, not autoplaying, it isn't necessary to do so. So I had the idea to just load the poster image of the YouTube video and then change it out for an iframe embed on the fly via jQuery.

Like many of my ideas, someone else had it before me.

I am a big proponent of not reinventing the wheel so I came across [LazyYT by Tyler Pearson](https://github.com/tylerpearson/lazyYT). It is pretty simple to use.

	<div class="lazyYT" data-youtube-id="DiF23zFvRIY" data-ratio="16:9" data-parameters="&rel=0">loading...</div>

Since I am using ZURB Foundation and want the video to resize and maintain its aspect ration, I just wrap it with the .flex-video class.

	<div class="flex-video widescreen">
		<div class="lazyYT" data-youtube-id="DiF23zFvRIY">loading...</div>
	</div>

So that took care of about half of my problem on the home page. The next issue to address was the Clarity.fm widget. I started including this after seeing it in the footer of the CopyHackers site. (definitely worth checking out)

With this, I was torn if I wanted to load it at all. First of all, it was really loading a lot of js and css for not much gain. It was just my image, some information and a basic link (with a tracking code of course) back to Clarity.

Taking a closer look, I didn't feel that it worked well with my current design and often didn't look that great when reflowed on to a mobile screen.

So I decided to replace it with just a simple button. I kept tracking link the same, just in case it has some sort of effect on the Clarity statistics.

## The Results

So how much of a difference could these two changes make. I pretty dramatic one from my experience. As you can see on the before and after these had a pretty large impact on the site.

I slashed more than half of the connections on the page. This has a huge impact on the load time since you often only get a couple of connections per domain maximum.

The second largest impact was about a 40% reduction in the size of the page. This blew my mind since I am loading quite a few images on the page and I didn't expect such a dramatic result.

So working in conjunction these have reduced the load time to 675ms or just over a half second. I am not quite back to my 500ms benchmark, but this is a huge improvement.


## Before

![](../../images/blog/2014/performance/jamesstone-current-overview.jpg)

## After

![](../../images/blog/2014/performance/jamesstone-staging-overview.jpg)

That is a pretty dramatic difference.

So have you built an app or a site where the performance has deteriorated slowly over time? What did you do to fix it? Did you see a pretty dramatic improvement? If so, I would love to hear from you in the comments.

