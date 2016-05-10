---
title: "Case Study: Snowflake Stories LLC"
layout: casestudy
active_nav: casestudy
site_image: "/images/case-study/snowflake-stories/site.png"
---

## Making Forms Fun Again

Imagine you’re a company that is creating a new product that doesn’t exist yet. You are pushing the limits of what can be done and figuring it out as you go. You have seen a big gap in the industry and found a huge demographic of people largely left behind by the status quo. Your dream is to bring a bilingual, customizable children’s storybook to the world, so that families who don’t fit into the mold of big publishing, finally have books that look and sound like them.


But, making an ecommerce website to customize and purchase a which has anywhere from 4 to 6 characters, which should actually look like one child and his or her family, is no small task. Making the book building process fun is even more difficult.

Snowflake Stories, LLC founder Jill Barletti wanted to solve the problem of creating books that are just as unique as most families are in the United States. There is plenty of evidence that reading is important in a child’s language development, Snowflake Stories is taking bedtime stories one step further, by making the most engaging star of a story that there can be, your child. Being an awesome parent isn’t easy, but books that engage the minds and souls of our next generation make it just a little bit easier.

## There are so many books, but there is only one about your child

Personalized products are quickly rising in popularity, [reports Forbes](http://www.forbes.com/sites/baininsights/2013/11/05/having-it-their-way-the-big-opportunity-in-personalized-products/#184ab1547036). Further evidence of this trend is the many examples of retail brands starting to offer some degree of personalization as an added value. The article goes on to report that offering customization can be a huge differentiation for a brand. 

What Snowflake Stories was proposing to do, largely had not been done before. There was no out-of-the-box solution and nothing that approached the complexity of trying to solve this problem.

## Creating SnowflakeStories.com

When first meeting with Snowflake Stories, Jill and her sounding board had a very good idea of the physical product they were creating. They had thought about every last detail, from the way that the illustrations had to be created, to the specific nuances of handling the complexity of the translation based on a highly variable cast of characters that would be created.

My role in the project was to to design, plan, develop and implement a web property that could make the process of purchasing such a highly customizable product and make it as frictionless as possible. Not only did I need to do this for a very complex product, but create a structure for future products, make sure the website could be translated into several languages, and integrate with an ecommerce solution that could accommodate such a project.

In my undergraduate studies, I studied traditional animation and illustration, and I knew that the quality of the book, the attention to detail, the quality of the writing, and of course, the gorgeous illustrations were top notch. I knew that they would need a website that showcased the product in a similar light and made the customization process just as fun to complete as using  the end product.

<div class="row align-center">
  <div class="column medium-8">
    <a target="_blank" href="/images/case-study/snowflake-stories/original-form-design.jpg"><img class="thumbnail" src="/images/case-study/snowflake-stories/original-form-design.jpg" alt=""></a>
  </div>
</div>

When we first met, Jill had shared some ideas of how she thought the customization should be designed. Jill had a very good grasp of the type of information she wanted to collect, but this was presented as one continuous form. Jill is very creative, driven and provided some great vision of where she wanted to go.

Now all we needed to do was to get there.

## Middleman, Localization, and Middleman

One unique constraint for Snowflake Stories was that it was to be translated into 4 languages, in addition to the default English. Just like the books, Jill intended for her site to be usable by all of the languages and cultures she intended to support with her first book, *[Dance Recital](https://www.snowflakestories.com/products/dance/)*.

This is no short order, because in localization, a staple of providing multi-language versions of websites, is not the easiest to implement in most cases. Luckily, we decided upon using [Middleman](https://middlemanapp.com), commonly known as a [Static Site Generator](https://www.staticgen.com), to create the structure for the site which was to be translated at a later time.

Middleman provides several different ways to handle your translations, from using tokens to having entire duplicate copies of templates. What is particularly nice, as it was in our case, is that you can enable this functionality and just provide one language up front. In this case, Middleman will translate all of the pages using the default language, in our case English. Then as you add additional tokens and templates in other formats, say for example Spanish, it will start creating a duplicate copy of the site under /es. Taking this one step further, if you didn’t have the resources to translate all aspects of the site, then anything left undone would still render correctly, although in the default language.

## JAM Stack: JavaScript, APIs, and Markup

Localization wasn’t the only great feature of using Middleman. By starting with the constraint of using a generated site to begin with, it forced us to think differently about the application architecture. Since there is no backend, you have to be more creative in your approach. In our case, we used Google Angular, a modern client-side MV* framework to interact with a Baas called Firebase.

<div class="row align-center">
  <div class="column medium-10">
    <script async class="speakerdeck-embed" data-id="12e277868f5941d1ae08ee37ed08fd5b" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>
  </div>
</div>


There are huge benefits to taking an approach like this. One benefit is speed. Many of today’s apps are bottlenecked by requiring the server to execute code, hit the database, and do all sorts of things behind the scenes. This usually leads to slow response times and much longer perceived latency with no real benefit for the end user. By using only HTML file, we are able to use incredibly high speed and highly distributed CDN based hosting services such as Netlify. This is not only lightning fast, but also greatly increases the speed for the end user by serving resources that are geographically closer to them. Some will argue you can gain this performance by simply serving your resources (JavaScript, CSS, Images, etc.) from a CDN, but you are still going to have that long wait on the initial page load.

Another benefit is that our backend is completely decoupled. This allows us to scale our app independently of our hosting, by changing the service level of our BAAS or by switching to another API based backend of our choice in the future. Yet another benefit of decoupling the backend like this, and loading our data async, is that we get a much faster perceived load time. This is because instead of loading some huge number of resources, we paint the page first, then show a loading state, while the rest of the page loads. Even though the end user sees the waiting state, because that is seen in a complete looking form quickly, the impression is that the app is faster than if we had loaded everything originally.

The final advantage of using the JAM Stack is portability. Because the site can be regenerated via a script, it allows us to replicate the site nearly anywhere, if the situation arrises. In addition to that, the site is generated automatically via a GitHub repo, which allows us to do things such as create staging sites that are identical, but just on a separate branch. When we are ready to go to production, it is as easy as running git merge.

## Google Angular + Angular Foundation: the J in our JAM Stack

Google Angular was a natural fit for this project because of the multi-part form style of this project. Having developed many sites using [jQuery](https://jquery.com/) in the past, I knew that [Google Angular](https://angularjs.org/), coupled with [UI-Router](https://github.com/angular-ui/ui-router), provides some very refined mechanisms for keeping state and creating highly interactive forms. Combined with [Firebase](https://www.firebase.com/) and [Angularfire](https://www.firebase.com/docs/web/libraries/angular/), a [BaaS](https://en.wikipedia.org/wiki/Mobile_backend_as_a_service) and its corresponding AngularJS Bindings, we had a system that made it easy to drive complex interactions that seem simple to the end user, and to save their data without skipping a beat.

Driving the view are components from [Angular Foundation](https://pineconellc.github.io/angular-foundation/), which is a set of directives that is a bolt-on replacement for [ZURB Foundation 5’s jQuery Components](http://foundation.zurb.com/sites/docs/javascript.html). This allowed us to quickly use ZURB Foundation in a Google Angular context, without sacrificing performance or usability.

## FoxyCart: It’s Not Easy Being Green

One of the most difficult things to source was an ecommerce partner that would allow us to tie into such a highly customizable product. Originally I thought I would have about 60 pieces of information per product to pass through. A much better solution was to pass a user and unique hash for the cast that the end user had created. Originally I thought this would be a pretty simple thing to accomplish via JavaScript.

Boy was I wrong.

I looked mainly at solutions such as Shopify, SnipCart and others. These are great solutions but at the time we started the project, absolutely zero of them could provide the level of customization that I was looking for. I mean, it seemed simple, I just wanted to pass an ID over when a customer purchased a product, but through a process of developing a series of prototypes to confirm if it would work prior to implementation (A great thing to do so you don’t lock into a technology that won’t solve your specific use case), I found none of them would allow me to send custom data.

Sure you could add sizes, and colors and change that anyway you wanted via JavaScript, but to pass something truly custom, none of them fit the bill.

It was around this time that I came across FoxyCart which proposes to be a developer friendly ecommerce solution. Although many of the other solutions had a much more polished and designed look, FoxyCart hit the right balance of having very good developer documentation, advanced customization options, but most importantly it supported passing custom data via JavaScript into its cart system.

## ZURB Foundation: The most advanced responsive front-end framework in the world

What is interesting is that Snowflake Stories had already decided upon using ZURB Foundation before they started working with me. They did extensive research into what were the best modern ways to build an ecommerce website and they knew that they wanted it to be responsive. They looked at the largest competing framework Twitter Bootstrap as well as ZURB Foundation. In their assessment they found that most Bootstrap sites had a theme-y look to them whereas most ZURB Foundation sites produced strong visual brands. Knowing that they wanted to align themselves with the latter, they focused on finding a service provider that could work with it.

Thus, ZURB Foundation was a natural fit and the technology upon what the rest of this site was built, and it was the flexibility of this framework that enabled it to be used seamlessly with Middleman (Ruby) and Angular. It was also the philosophy of the framework that allowed us to test ideas and generate prototypes quickly in a production environment. Moreover, [ZURB Foundation’s ](http://zurb.com/responsive)[uncanny ability to shapeshift](http://zurb.com/responsive)[ ](http://zurb.com/responsive)into any sort of visual brand that you could throw at it made this project possible.

Everything you see on Snowflake Stories was quickly modified from the existing framework. From the modified Accordion used on the [Character Builder](https://www.snowflakestories.com/products/dance/customize), to the Tabs, Buttons and Menus you find throughout the site. But these components would be nothing if it weren’t for the thousands of hours put in by ZURB and the [Open Source community](https://github.com/zurb/foundation-sites), that makes creating a responsive site a snap. Snowflake Stories was designed from the ground up to not only work on a computer, but to work just as well and be just as easy to use from a mobile phone.

## A Redesign Made Simple

After going through several iterations and nailing down the user experience, we brought UI Designer, [Marcus Handa ](http://marcushanda.co/)on board to clean up the design and modernize it. There are plenty of designers out there that can hammer out a modern looking design, but not many that can keep the original design intent and vision of a project like Snowflake Stories.

Marcus and I went through several rounds of interactions in collaboration with the founder of the company and finally came to a design that we were all happy with. The interaction was largely the same, but Marcus’ keen sense for color and refinement tied the whole project together. Because Marcus is a designer who understands both grid systems and responsive design and uses modern tools the entire process went very smoothly.

Using tools such as [Bohemian Coding Sketch 3](https://www.sketchapp.com/) and [Zeplin.io](https://zeplin.io/) I was able to render out his new designs in no time at all. Because ZURB Foundation provides such great structure and is so cleverly organized, it was simply a course of updating and slightly changing what was already there.

<img class="float-right" src="/images/case-study/snowflake-stories/ippy-medal.png" style="width:24%;" alt="">

## An Award-winning Site for an Award-winning Book

What started out as a complex set of challenges has resulted in an award-winning site.

In 2015, Snowflake Stories was honored with the Bronze IPPY Award for Best Book/Author/Publisher Website by the Independent Publisher Book Awards. The IPPY Awards, now celebrating its 19th anniversary, are conducted annually and honor the best independently published books and book-related websites of the year. As a self-funded startup in the publishing industry, there is no higher honor than to be recognized alongside some of the most innovative websites for authors, books and publishers.

## What Jill Barletti, Founder of Snowflake Stories, LLC has to say about James Stone

> *"It’s not easy being a self-funded start-up, especially when going it alone. James has became an integral part of my team, sharing his knowledge of web development and making valuable recommendations.*

> *What stands out for me is the wonderful experience that James was able to create for visitors to the website.  He broke from the industry standard of long, boring, wordy forms for customizing books and instead created a sleek, easy-to-use app that we've named the "Character Builder."*

> *The site is truly user-friendly and the design is very clean, not dizzying like many other sites selling children's products.  I would venture to guess that James' MFA helped drive the creative solutions to problems we faced."*