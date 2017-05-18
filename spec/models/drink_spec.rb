require 'rails_helper'

RSpec.describe Drink, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:roaster_id) }
    it { should validate_presence_of(:roast_type) }
  end


  describe 'associations' do
    it { should belong_to(:roaster)}
    it { should have_many(:ratings)}
  end
end
