image_optim find **/*.{png,jpg,jpeg,gif}

be middleman build && be middleman s3_sync

## Building

bundle exec middleman build

## Staging

staging is on a heroku staging remote

git push staging name-of-branch-to-push:master

## Deployment

bundle exec middleman deploy

you must build it before deploying

bundle exec middleman build