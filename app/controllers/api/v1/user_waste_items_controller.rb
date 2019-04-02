module Api::V1
  class UserWasteItemsController < ApplicationController
  # before_action :set_user_waste_item, only: [:show, :update, :destroy]

  before_action :load_user, only: [:create]

  # GET /user_waste_items
  def index
    @user_waste_items = UserWasteItem.all

    render json: @user_waste_items
  end

  # GET /user_waste_items/1
  def show
    render json: @user_waste_item
  end

  # POST /user_waste_items
  def create
    @user_waste_item = UserWasteItem.new(user: current_user, waste_item_id: params["user_waste_item"]["waste_item_id"])

    if @user_waste_item.save
      @user.points += @user_waste_item.points
      @user.waste_diverted += @user_waste_item.weight
      @user.save
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

    # Only allow a trusted parameter "white list" through.
    def user_waste_item_params
      params.require(:user_waste_item).permit(:waste_item_id)
    end
end
end
