class FixTypo < ActiveRecord::Migration
  def change
    remove_column :drinks, :desciption
    add_column :drinks, :description, :string
  end
end
