@roasters.each do |roaster|
  json.set! roaster.id do
    json.extract! roaster, :id, :name
  end
end
