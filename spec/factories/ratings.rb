require 'faker'

FactoryGirl.define do
  factory :rating do
    description { Faker::RickAndMorty.quote }
    drink_id 0
    user_id 0
    checkin_rating { Faker::Number.between(1, 5) }
    picture_url { Faker::Internet.url }
  end
end
