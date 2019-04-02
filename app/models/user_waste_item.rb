class UserWasteItem < ApplicationRecord
  belongs_to :user
  belongs_to :waste_item

  delegate :points, :weight,  :to => :waste_item

  def findId
    @user_waste_item = UserWasteItem.find(params[:id])
  end

  def findPoints
    self.findId.points
  end

  def totalPoints
    self.findPoints + self.findUser
  end

  def findUser
    self.findId.user.points
  end

end
