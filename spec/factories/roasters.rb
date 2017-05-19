require 'faker'

FactoryGirl.define do
  factory :roaster do
    name { Faker::RickAndMorty.character }
  end
end
