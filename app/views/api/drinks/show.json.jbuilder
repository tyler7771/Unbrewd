json.set! @drink.id do
  json.extract! @drink, :id, :name, :roast_type, :description
  json.set! :roaster do
    json.extract! @drink.roaster, :id, :name, :picture_url
  end
  json.set! :stats do
    json.extract! @stats, :all, :unique, :user, :average_rating, :count
  end
end
