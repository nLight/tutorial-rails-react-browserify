Rails.application.configure do
  config.browserify_rails.evaluate_node_modules = true
  config.browserify_rails.commandline_options = "-t [ babelify --presets [ react ] ]"
end
