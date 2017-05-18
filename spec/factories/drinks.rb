require 'faker'

FactoryGirl.define do
  factory :drink do
    name { Faker::Coffee.blend_name }
    roaster_id { Faker::Number.between(1, 5) }
    roast_type { Faker::Coffee.variety }
    description { Faker::RickAndMorty.quote }
  end
end
