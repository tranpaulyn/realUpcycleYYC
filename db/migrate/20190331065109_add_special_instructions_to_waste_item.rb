class AddSpecialInstructionsToWasteItem < ActiveRecord::Migration[5.2]
  def change
    add_column :waste_items, :instructions, :string
  end
end
