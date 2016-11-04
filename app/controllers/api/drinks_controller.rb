class Api::DrinksController < ApplicationController
  def index
    # debugger
    @drinks = Drink.includes(:roaster).all
    render :index
  end

  def show
    @drink = Drink.includes(:roaster).find(params[:id])
  end

  def create
    @drink = Drink.new(drink_params)

    if @drink.save
      render :show
    else
      render :json => { :errors => @drink.errors.full_messages }, :status => 422
    end
  end

  def update
    @drink = Drink.find(params[:id])

    if @drink.update_attributes(drink_params)
      render :show
    else
      render :json => { :errors => @drink.errors.full_messages }, :status => 422
    end
  end

  def destroy
    @drink = Drink.find(params[:id])
    @drink.destroy
    render :index
  end

  private
  def drink_params
    params.require(:drink)
    .permit(:name, :roaster_id, :roast_type, :picture_url)
  end
end
