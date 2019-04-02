class UserWasteItem < ApplicationRecord
  belongs_to :user
  belongs_to :waste_item

  delegate :points, :weight,  :to => :waste_item

end
