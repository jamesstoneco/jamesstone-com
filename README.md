# jamesstone.com middleman based site

note: this repo auto-deploys to bitballoon. Please work on staging branch and send a PR.

Staging deploys to [jamesstone-staging.bitballoon.com](http://jamesstone-staging.bitballoon.com)
Status: [www.bitballoon.com/sites/jamesstone-staging](https://www.bitballoon.com/sites/jamesstone-staging)

Site will automatically redeploy with a `git push origin master` on either branch respectively...

Please do not work directly on master unless instructed to do so.

Master deploys to: [jamesstone.com](https://www.jamesstone.com)
Status: [www.bitballoon.com/sites/jamesstone-com](https://www.bitballoon.com/sites/jamesstone-com)

# YML Tags

* title: title at top of page, used for name in google search
* seo\_desc: a short paragraph used for the description for search engines
* published: false (will not show on site or build)

## Blog Specific YML Tags

* date: date published in YYYY/DD/MM format
* time: time published in 3:57 PM CET format CET = Paris, PST = Pacific
* tags: currently not used
* featured\_image: full path to the featured image at the top of the article "/blog/featured-images/multitool.jpg"
* signup\_zurb: no longer used, please remove
* highlights:
example
     highlights:
     - How to expand your reach
     - The importance of building a platform
     - Do what you love
     - Write about everything
     - Why being authentic wins over automation


# erb specific blog items

note: you must rename the file to .md.erb . this will make it so it no longer renders nicely in prose.io. place it with at least one line above and below with blank space.

## tweetthis

     <%= partial(:tweetthis, :locals => {:quote => "Get out of the building", :person => "Steve Blank", :twitter_account => "sgblank"}) %>

     <%= partial(:tweetthis, :locals => {:quote => "Some cool tweet", :person => "Steve Blank") %>

     <%= partial(:tweetthis, :locals => {:quote => "Some cool tweet") %>
