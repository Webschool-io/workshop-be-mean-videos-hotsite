# Change Compass configuration
require 'susy'

compass_config do |config|
  config.output_style = :compact
end

page "robots.txt", :layout => false

activate :livereload
activate :relative_assets

ignore 'docs*'
ignore 'images/symbol.ai'

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'


configure :build do
  activate :gzip
  activate :minify_html
  activate :minify_css
  activate :minify_javascript
end
