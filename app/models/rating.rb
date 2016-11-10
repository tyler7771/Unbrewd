class Rating < ActiveRecord::Base
  validates :drink_id, :user_id, presence: true
  belongs_to :user
  belongs_to :drink

  def self.index_with_params(params)
    if params[:type] == "drink"
      @ratings = Drink.find_by(id: params[:id])
    elsif params[:user]
      @ratings = User.find(name: params[:user][:username])
    end

    if params[:amount] && @ratings.ratings.all.length > params[:ammount].to_i

      return @ratings.ratings.includes(:user, :drink).all.reverse.slice(0, params[:amount].to_i)
    else
      return @ratings.ratings.includes(:user, :drink).all.reverse
    end
  end
end
