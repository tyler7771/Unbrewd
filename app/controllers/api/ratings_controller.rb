class Api::RatingsController < ApplicationController
  def index
    if params[:params]
      @ratings = Rating.index_with_params(params[:params])
    else
      @ratings = Rating.includes(:user, :drink).all.reverse
      render :index
    end
  end

  def show
    @rating = Rating.includes(:user, :drink).find(params[:id])
  end

  def create
    @rating = Rating.new(rating_params)
    @rating.user_id = current_user.id

    if @rating.save
      render :show
    else
      render :json => { :errors => @rating.errors.full_messages }, :status => 422
    end
  end

  def update
    @rating = Rating.find(params[:id])

    if @rating.update_attributes(rating_params)
      render :show
    else
      render :json => { :errors => @rating.errors.full_messages }, :status => 422
    end
  end

  def destroy
    @rating = Rating.find(params[:id])
    @rating.destroy
    render :json => {}
  end

  private
  def rating_params
    params.require(:rating)
    .permit(:drink_id, :checkin_rating, :description, :picture_url, :display_data)
  end
end
