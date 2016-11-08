class AddPictureColumn < ActiveRecord::Migration
  def change
    add_column :ratings, :picture_url, :string, :default => "http://res.cloudinary.com/dfmvfna21/image/upload/c_scale,h_209/v1478563599/coffee-cup-outline_318-39738_sl1xhs.jpg"
  end
end
