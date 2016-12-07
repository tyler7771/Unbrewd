class CreateRatings < ActiveRecord::Migration
  def change
    create_table :ratings do |t|
      t.integer :coffee_id, null: false
      t.integer :author_id, null: false
      t.date :date, null: false
      t.integer :rating
      t.string :description
      t.timestamps null: false
    end
  end
end
