class FavoritesController < ApplicationController

  def index
  end

  def create
    params["user_id"] = current_user.id
    @fav = Favorite.new({
      :user_id => current_user.id,
      :gist_id => params[:gist_id]
    })
    @fav.save!
    head :ok
  end

  def destroy
    head :ok
  end

end
