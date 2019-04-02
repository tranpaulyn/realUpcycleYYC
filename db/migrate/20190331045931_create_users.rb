class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.integer :points
      t.references :ward, foreign_key: true
      t.decimal :waste_diverted

      t.timestamps
    end
  end
end
