class Shops < ActiveRecord::Migration
  def change
    create_table :shops_coffees do |t|
      t.integer :coffee_id, null: false
      t.integer :coffee_shop_id, null: false
      t.timestamps null: false
    end
  end
end
