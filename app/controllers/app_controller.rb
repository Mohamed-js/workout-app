class AppController < ApplicationController
    def index
    end

    def refresher
        Net::HTTP.get(URI('http://refresher-app.onrender.com/refresher'))
        render json: 'I\'m good!'
    end
end
