class Rating < ActiveRecord::Base
  validates :drink_id, :user_id, presence: true
  belongs_to :user
  belongs_to :drink

  def self.index_with_params(params)
    @ratings = self.find_by_params(params)

    if params[:amount] && @ratings.length >= params[:amount].to_i
      if params[:type]
        return @ratings.includes(:user, :drink).to_a.slice(-params[:amount].to_i..-1)
      else
        ratings =  @ratings.includes(:user, :drink).shuffle.slice(0, params[:amount].to_i)
        return ratings
      end
    else
      return @ratings.includes(:user, :drink)
    end

  end

  def self.find_by_params(params)
    if params && params[:type] == "drink"
      Drink.find_by(id: params[:id]).ratings
    elsif params && params[:type] == "user"
      return User.find_by(id: params[:id]).ratings
    else
      return Rating.all
    end
  end

  def self.statistics(params, current_user, type)
    if type == "create"
      return {all: 0, user: 0, unique: 0, average_rating: 0, count: 0}
    else
      ratings = self.find_by_params(params)
      if params || params[:type] == "drink"
        all = ratings.count

        user_statistic = ratings.select { |rating| rating.user.username == current_user.username }
        user_stat = user_statistic.length
        if params[:type] == "user"
          unique = ratings.count("DISTINCT drink_id")
        else
          unique = ratings.count("DISTINCT user_id")
        end

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
      else
        all = ratings.length
        unique = ratings.count("DISTINCT drink_id")
      end

      return {all: all, user: user_stat, unique: unique, average_rating: average, count: count}
    end
  end
end
