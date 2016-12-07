class RemoveDateColumn < ActiveRecord::Migration
  def change
    remove_column :ratings, :date
  end
end
