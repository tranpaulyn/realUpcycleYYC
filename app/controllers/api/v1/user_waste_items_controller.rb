module Api::V1
  class UserWasteItemsController < ApplicationController
  # before_action :set_user_waste_item, only: [:show, :update, :destroy]

  before_action :load_user, only: [:create]

  # GET /user_waste_items
  def index
    @user_waste_items = UserWasteItem.all

    items = []

    @user_waste_items.each do |item|
      items.push({id: item.id, user_id: item.user_id, waste_item_id: item.waste_item_id, waste_name: item.waste_item.name, compostable: item.waste_item.compostable, recyclable: item.waste_item.recyclable, garbage: item.waste_item.garbage, points: item.points, weight: item.weight, type: item.waste_item.type_of_waste, instruction: item.waste_item.instructions})
    end

    render json: items
  end

  # GET /user_waste_items/1
  def show
    render json: @user_waste_item.to_json(:include => [:name])
  end

  # POST /user_waste_items
  def create
    @user_waste_item = UserWasteItem.new(user: current_user, waste_item_id: params["user_waste_item"]["waste_item_id"])

    @ward = Ward.find_by(:name => 1)

    if @user_waste_item.save
      @user.points += @user_waste_item.points
      @user.waste_diverted += @user_waste_item.weight
      @ward.points += @user_waste_item.points
      @ward.total_weight += @user_waste_item.weight
      @user.save
      @ward.save
      render json: @user_waste_item, status: :created
    else
      render json: @user_waste_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_waste_items/1
  def update
    if @user_waste_item.update(user_waste_item_params)
      render json: @user_waste_item
    else
      render json: @user_waste_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_waste_items/1
  def destroy
    @user_waste_item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_waste_item
      @user_waste_item = UserWasteItem.find(params[:id])
    end

    def load_user
      @user = User.find(1)
    end

    def load_ward
      @ward = Ward.find_by(:name => 1)
    end

    # Only allow a trusted parameter "white list" through.
    def user_waste_item_params
      params.require(:user_waste_item).permit(:waste_item_id)
    end
end
end
