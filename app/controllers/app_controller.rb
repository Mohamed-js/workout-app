class AppController < ApplicationController
    def index
    end

    def refresher
        Net::HTTP.get(URI('https://appyrefresher.onrender.com/refresher'))
        render json: 'I\'m good!'
    end
end
