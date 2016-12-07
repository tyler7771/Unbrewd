class AddImageUrl < ActiveRecord::Migration
  def change
    remove_column :drinks, :image_url
    add_column :drinks, :picture_url, :string, :default => "http://res.cloudinary.com/dfmvfna21/image/upload/v1478211374/coffee-cup-working-happy_gsogqz.jpg"
  end
end
