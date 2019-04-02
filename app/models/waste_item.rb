class WasteItem < ApplicationRecord
    has_many :user_waste_items, through: :user
end
