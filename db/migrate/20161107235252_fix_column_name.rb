class FixColumnName < ActiveRecord::Migration
  def change
    remove_column :ratings, :coffee_id
    add_column :ratings, :drink_id, :string, null: false
  end
end
