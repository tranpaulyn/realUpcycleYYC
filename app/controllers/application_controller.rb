class ApplicationController < ActionController::API

    def current_user
        session[:user_id] = 1
        @current_user ||= User.find(session[:user_id])
    end

    def fallback_index_html
        render :file => 'public/index.html'
    end

end
