require 'sinatra'

set :port, 5500

get '/' do
  "Hello, World!"
end

post '/' do
  "Received a POST request!"
end

puts "Server running on port #{settings.port}"

#ruby /C:/Users/jacki/dev/code-playground/server.rb

