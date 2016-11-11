class ChangeCoverPhoto < ActiveRecord::Migration
  def change
    remove_column :users, :cover_photo_url
    add_column :users, :cover_photo_url, :string, :default => "http://res.cloudinary.com/dfmvfna21/image/upload/v1478825443/xhtonw9fbwzwvdei7oef.jpg"
  end
end
