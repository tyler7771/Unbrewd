class CreateRoasters < ActiveRecord::Migration
  def change
    create_table :roasters do |t|
      t.string :name, null: false
      t.timestamps null: false
    end
    add_index :roasters, :name, unique: true
  end
end
