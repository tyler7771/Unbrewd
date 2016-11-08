class RemoveRatingDefaultPicture < ActiveRecord::Migration
  def change
    remove_column :ratings, :picture_url
    add_column :ratings, :picture_url, :string
  end
end
