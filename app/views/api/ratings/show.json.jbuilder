json.set! @rating.id do
  json.extract! @rating, :id, :created_at, :rating, :description, :picture_url
  json.set! :user do
    json.extract! @rating.user, :id, :username, :picture_url
  end
  json.set! :drink do
    json.extract! @rating.drink, :id, :name
  end
end
