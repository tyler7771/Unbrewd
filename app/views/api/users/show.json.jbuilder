json.partial! 'api/users/user', user: @user
json.set! :stats do
  json.extract! @stats, :all, :unique
end
