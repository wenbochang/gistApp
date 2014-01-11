class GistsController < ApplicationController

  def index
    @gists = current_user.gists
    # render :json => current_user.gists
    render "/gists/index"
  end

  def show
    @gist = Gist.find(params[:id])
    @favorite = Favorite.find_by_user_id_and_gist_id(current_user.id, @gist.id)
    render "/gists/show"
  end

end
