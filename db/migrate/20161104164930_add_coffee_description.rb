class AddCoffeeDescription < ActiveRecord::Migration
  def change
    add_column :drinks, :desciption, :string
  end
end
