json.set! @drink do
  json.extract! @drink, :id, :name, :roast_type, :picture_url
  json.set! :roaster do
    json.extract! @drink.roaster, :id, :name
  end
end
