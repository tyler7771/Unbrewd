class CreateDrinks < ActiveRecord::Migration
  def change
    create_table :drinks do |t|
      t.string :name, null:false
      t.integer :roaster_id, null: false
      t.string :roast_type, null: false
      t.string :image_url

      t.timestamps null: false
    end
    add_index :drinks, :name
  end
end
