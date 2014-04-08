image_optim find **/*.{png,jpg,jpeg,gif}

be middleman build && be middleman s3_sync

## Building

bundle exec middleman build

## Staging

staging is on a heroku staging remote

git push staging name-of-branch-to-push:master

### Create Staging Server

heroku apps:create host-name-of-staging-server --remote staging

## Deployment

bundle exec middleman deploy

you must build it before deploying

bundle exec middleman build