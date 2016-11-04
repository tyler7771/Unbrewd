@drinks.each do |drink|
  json.set! drink.id do
    json.extract! drink, :id, :name, :roast_type, :picture_url
    json.set! :roaster do
      json.extract! drink.roaster, :id, :name
    end
  end
end
