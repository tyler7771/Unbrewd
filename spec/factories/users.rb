require 'faker'

FactoryGirl.define do
  factory :user do
    username { Faker::Name.first_name }
    password { Faker::Internet.password(min_length = 6, max_length = 10) }
  end
end
