class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credintials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      render './api/users/show'
    else
      render :json => { :errors => ["Username and password incorrect"] }, :status => 401
    end
  end

  def destroy
    if current_user
      sign_out
      render json: {}
    else
      render :json => { :errors => ["User not found"] }, :status => 404
    end
  end
end
