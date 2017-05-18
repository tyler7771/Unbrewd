class Drink < ActiveRecord::Base
  validates :name, :roaster_id, :roast_type, presence: true

  belongs_to :roaster
  has_many :ratings
end
