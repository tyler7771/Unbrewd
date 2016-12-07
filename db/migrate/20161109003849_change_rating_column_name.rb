class ChangeRatingColumnName < ActiveRecord::Migration
  def change
    remove_column :ratings, :rating
    add_column :ratings, :checkin_rating, :integer
  end
end
