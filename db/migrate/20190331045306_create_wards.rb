class CreateWards < ActiveRecord::Migration[5.2]
  def change
    create_table :wards do |t|
      t.integer :name

      t.timestamps
    end
  end
end
