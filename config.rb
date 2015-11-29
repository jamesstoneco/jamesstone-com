require 'builder'
require 'sanitize'
require 'uri'
require 'slim'
require 'nokogiri'
# require 'middleman-search/extension'


# set :markdown_engine, :redcarpet
# set :markdown, :fenced_code_blocks => true, :autolink => true,
#   :smartypants => true, :tables => true, :with_toc_data => true

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
activate :livereload

activate :autoprefixer do |config|
  config.browsers = ['last 2 versions', 'Explorer >= 9']
end

# Word frequency sort:
activate :similar

# set :markdown_engine, :redcarpet
# set :markdown, renderer: toc_renderer, with_toc_data: true

# set :markdown, :tables => true, :autolink => true, :gh_blockcode => true, :fenced_code_blocks => true, with_toc_data: true

# Methods defined in the helpers block are available in templates
helpers do
  def nav_active(page)
    @page_id == page ? {:class => "disabled"} : {}
  end
  def strip_html(str)
    Sanitize.clean(str, :elements => ['p'])
  end
  def strip_all_html(str)
    Sanitize.clean(str)
  end

end


set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

set :trailing_slash, false

# foundation patch per http://wanderwort.de/2013/04/11/using-zurb-foundation-with-middleman/

# bourbon_path = Gem::Specification.find_by_name('bourbon').gem_dir
set :js_assets_paths, [File.join(root, 'bower_components')]
# set :sass_assets_paths, [File.join(root, 'bower_components/foundation/scss', 'bower_compononents/lazyYT')]
# set :sass_assets_paths, [File.join(root, 'bower_components/foundation/scss')]
set :sass_assets_paths, [File.join(root, 'bower_components/foundation-sites-6/scss'), File.join(root, 'bower_components/motion-ui')]



activate :blog do |blog|
  # set options on blog
  blog.name = "blog"
  blog.prefix = "blog"
  blog.permalink = ":title.html"
  # Time.zone = "Paris"
  Time.zone = "Pacific Time (US & Canada)"
  blog.summary_separator = /SPLIT_SUMMARY_BEFORE_THIS/
  blog.layout = "blog"
  blog.taglink = "tag/:tag.html"
  blog.tag_template = "blog/tag.html"
  blog.paginate = true
  blog.page_link = "p:num"
end

activate :blog do |blog|
  # set options on blog
  blog.name = "daily-dispatch"
  blog.prefix = "daily-dispatch"
  blog.permalink = ":year/:month/:day/:title.html"
  Time.zone = "Pacific Time (US & Canada)"
  blog.summary_separator = /SPLIT_SUMMARY_BEFORE_THIS/
  blog.layout = "dailydispatch"
  # blog.taglink = ":tag.html"
  # blog.tag_template = "blog/tag.html"
  # blog.paginate = true
  # blog.page_link = "p:num"
end



# pretty urls, as directories, this must run after the blog block
activate :directory_indexes


page "/feed.xml", :layout => false
page "/redirects.html.erb", :layout => false
# page "/_redirects.erb", :layout => false
# page '404.html', append_extension: false
page "/404.html", :directory_index => false

page "/blog/feed.xml", :layout => false

page "/template/*", :directory_index => false


# landing pages below

page "/zurb-foundation-blueprints.html", :layout => "landing"
page "/zurb-foundation-quick-reference.html", :layout => "landing"
page "/advanced-zurb-foundation.html", :layout => "landing"
page "/advanced-zurb-foundation-course.html", :layout => "landing"
page "/free-zurb-foundation-course.html", :layout => "landing"
# page "/course/zurb-foundation-beyond-the-template/*", :layout => "locked"
# page "/zurb-foundation-4-blueprints.html", :layout => "landing"
# page "/zurb-foundation-4-blueprints-s.html", :layout => "landing"

# page "error.html", :directory_index => false

# redcarpet configuration

set :markdown_engine, :redcarpet
set :markdown,  :fenced_code_blocks => true,
                :autolink => true,
                :smartypants => true


# Build-specific configuration
configure :build do
  # activate :minify_css
  # activate :minify_javascript
  # set :js_compressor, ::Closure::Compiler.new
  # activate :gzip

  # activate :asset_hash

  # for cdn

  # enable asset hosts
  # activate :asset_host

  # set :asset_host do |asset|
  #   '//assets.jamesstone.co'.to_s
  # end

  activate :search do |search|
    search.resources = ['blog/', 'about/index.html',  'services/index.html']
    search.index_path = 'api/lunr-index.json'
    search.fields = {
      title:   {boost: 100, store: true, required: true},
      content: {boost: 50},
      featured_image: {index: false, store: true},
      url:     {index: false, store: true}
    }
  end


end



after_build do |builder|
  src = File.join(config[:source],"_redirects")
  dst = File.join(config[:build_dir],"_redirects")
  builder.source_paths << File.dirname(__FILE__)
  builder.copy_file(src,dst)

  activate :autoprefixer do |config|
    config.browsers = ['last 2 versions', 'Explorer >= 9']
  end

end



# activate :deploy do |deploy|
#   deploy.method = :rsync
#   deploy.host   = ENV['MOS_WWW_HOST']
#   deploy.path   = ENV['MOS_WWW_PATH']
#   # Optional Settings
#   deploy.user  = ENV['MOS_WWW_USER'] # no default
#   deploy.port  = ENV['MOS_WWW_PORT'] # ssh port, default: 22
#   deploy.clean = true # remove orphaned files on remote host, default: false
#   # deploy.flags = "-rltgoDvzO --no-p --del -e" # add custom flags, default: -avze
# end

# activate :bitballoon do |bitballoon|
#   bitballoon.token = ENV["BB_TOKEN"]
#   bitballoon.site  = "my-bitballoon-site.bitballoon.com"

#   # Optional: always run a build before deploying
#   bitballoon.build_before = true
# end





