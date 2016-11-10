class Rating < ActiveRecord::Base
  validates :drink_id, :user_id, presence: true
  belongs_to :user
  belongs_to :drink

  def self.index_with_params(params)
    @ratings = self.find_by_params(params)

    if params[:amount] && @ratings.length > params[:ammount].to_i
      return @ratings.includes(:user, :drink).all.reverse.slice(0, params[:amount].to_i)
    else
      return @ratings.includes(:user, :drink).all.reverse
    end
  end

  def self.find_by_params(params)
    if params[:type] == "drink"
      return Drink.find_by(id: params[:id]).ratings
    elsif params[:type] == "user"
      return User.find(id: params[:id]).ratings
    end
  end

  def self.statistics(params, current_user)
    ratings = self.find_by_params(params)
    all = ratings.length

    user_statistic = ratings.select { |rating| rating.user.username == current_user.username }
    user_stat = user_statistic.length

    unique = ratings.uniq { |r| r.user_id }
    # debugger
    unique_stat = unique.length


    if params[:type] == "drink"
      sum = 0
      count = 0

      ratings.each do |rating|
        unless rating.checkin_rating.nil? || rating.checkin_rating == 0
          sum += rating.checkin_rating
          count += 1
        end
      end

      if count == 0
        average = 0
      else
        average = sum / count
      end
    end

    return {all: all, user: user_stat, unique: unique_stat, average_rating: average, count: count}
  end
end
