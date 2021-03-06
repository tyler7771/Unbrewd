class Api::DrinksController < ApplicationController
  def index
    @drinks = Drink.includes(:roaster).all
    render :index
  end

  def show
    @drink = Drink.includes(:roaster).find(params[:id])
    @stats = Rating.statistics(params[:params], current_user, "get")
  end

  def create
    @drink = Drink.new(drink_params)
    if @drink.save
      @stats = Rating.statistics(params[:params], current_user, "create")
      render :show
    else
      render :json => { :errors => @drink.errors.full_messages }, :status => 422
    end
  end

  def update
    @drink = Drink.find(params[:id])

    if @drink.update_attributes(drink_params)
      @stats = Rating.statistics({id: @drink.id, type: "drink"}, current_user, "update")
      render :show
    else
      render :json => { :errors => @drink.errors.full_messages }, :status => 422
    end
  end

  def destroy
    @drink = Drink.find(params[:id])
    @drink.destroy
    render :json => @drink
  end

  private
  def drink_params
    params.require(:drink)
    .permit(:name, :roaster_id, :roast_type, :description)
  end
end
