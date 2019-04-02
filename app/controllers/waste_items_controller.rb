class WasteItemsController < ApplicationController
  before_action :set_waste_item, only: [:show, :update, :destroy]

  # GET /waste_items
  def index
    @waste_items = WasteItem.all

    render json: @waste_items
  end

  # GET /waste_items/1
  def show
    render json: @waste_item
  end

  # POST /waste_items
  def create
    @waste_item = WasteItem.new(waste_item_params)

    if @waste_item.save
      render json: @waste_item, status: :created, location: @waste_item
    else
      render json: @waste_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /waste_items/1
  def update
    if @waste_item.update(waste_item_params)
      render json: @waste_item
    else
      render json: @waste_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /waste_items/1
  def destroy
    @waste_item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_waste_item
      @waste_item = WasteItem.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def waste_item_params
      params.require(:waste_item).permit(:name, :type, :compostable, :recyclable, :garbage, :points, :weight)
    end
end
