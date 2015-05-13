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

activate :deploy do |deploy|
	deploy.build_before = true
  deploy.method   = :ftp
  deploy.host     = "ftp.cursobemeanfloripa.com.br"
  deploy.path     = "/public_html"
  deploy.user     = "mean"
  deploy.password = "gXhZj32ctfd"
end

configure :build do
  activate :gzip
  activate :minify_html
  activate :minify_css
  activate :minify_javascript
end
