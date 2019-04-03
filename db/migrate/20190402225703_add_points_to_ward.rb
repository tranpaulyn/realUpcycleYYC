class AddPointsToWard < ActiveRecord::Migration[5.2]
  def change
    add_column :wards, :points, :integer
    add_column :wards, :total_weight, :decimal
  end
end
