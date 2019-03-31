class CreateWasteItems < ActiveRecord::Migration[5.2]
  def change
    create_table :waste_items do |t|
      t.string :name
      t.string :type_of_waste
      t.boolean :compostable
      t.boolean :recyclable
      t.boolean :garbage
      t.integer :points
      t.decimal :weight

      t.timestamps
    end
  end
end
