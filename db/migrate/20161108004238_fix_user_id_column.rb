class FixUserIdColumn < ActiveRecord::Migration
  def change
    remove_column :ratings, :drink_id
    add_column :ratings, :drink_id, :integer, null: false
    remove_column :ratings, :author_id
    add_column :ratings, :user_id, :integer, null: false
  end
end
