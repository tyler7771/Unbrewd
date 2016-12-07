@drinks.each do |drink|
  json.set! drink.id do
    json.extract! drink, :id, :name, :roast_type, :description
    json.set! :roaster do
      json.extract! drink.roaster, :id, :name, :picture_url
    end
  end
end
