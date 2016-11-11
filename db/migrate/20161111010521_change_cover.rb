class ChangeCover < ActiveRecord::Migration
  def change
    remove_column :users, :cover_photo_url
    add_column :users, :cover_photo_url, :string, :default => "http://res.cloudinary.com/dfmvfna21/image/upload/v1478825954/igfidzbaz4hiemcr3ez1.jpg"
  end
end
