class FixDefaultProfilePic < ActiveRecord::Migration
  def change
    remove_column :users, :picture_url
    add_column :users, :picture_url, :string, :default => "http://res.cloudinary.com/dfmvfna21/image/upload/v1478883513/ck7ayfpd6amcvb5fgunc.jpg"
  end
end
