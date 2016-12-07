class AddUserUrl < ActiveRecord::Migration
  def change
    add_column :users, :picture_url, :string, :default => "http://res.cloudinary.com/dfmvfna21/image/upload/v1478198648/249903173ee16b3346ba320a24e56a8b_quwrxc.jpg"
  end
end
