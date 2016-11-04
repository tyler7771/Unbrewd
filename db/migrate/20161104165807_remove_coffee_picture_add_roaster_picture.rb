class RemoveCoffeePictureAddRoasterPicture < ActiveRecord::Migration
  def change
    remove_column :drinks, :picture_url
    add_column :roasters, :picture_url, :string, :default => "http://res.cloudinary.com/dfmvfna21/image/upload/c_scale,h_500/v1478211374/coffee-cup-working-happy_gsogqz.jpg"
  end
end
