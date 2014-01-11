class Gist < ActiveRecord::Base
  attr_accessible :title, :user_id

  validates :title, :user_id, :presence => true

  has_many :favorites

  belongs_to :user

  def favorite(user)
    Favorite.find_by_user_id_and_gist_id(user.id, self.id)
  end

end
