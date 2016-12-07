class Api::RoastersController < ApplicationController
  def index
    @roasters = Roaster.all
    render :index
  end

  def show
    @roaster = Roaster.find(params[:id])
  end

  def create
    if params[:roaster][:picture_url] == ""
      @roaster = Roaster.new({name: params[:roaster][:name]})
    else
      @roaster = Roaster.new(roaster_params)
    end

    if @roaster.save
      render :show
    else
      render :json => { :errors => @roaster.errors.full_messages }, :status => 422
    end
  end

  private
  def roaster_params
    params.require(:roaster).permit(:name, :picture_url)
  end
end
