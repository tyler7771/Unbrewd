class Rating < ActiveRecord::Base
  validates :drink_id, :user_id, presence: true
  belongs_to :user
  belongs_to :drink
end
