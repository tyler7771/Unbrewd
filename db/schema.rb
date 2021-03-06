# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161111165929) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "drinks", force: :cascade do |t|
    t.string   "name",        null: false
    t.integer  "roaster_id",  null: false
    t.string   "roast_type",  null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "description"
  end

  add_index "drinks", ["name"], name: "index_drinks_on_name", using: :btree

  create_table "ratings", force: :cascade do |t|
    t.string   "description"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.integer  "drink_id",       null: false
    t.integer  "user_id",        null: false
    t.string   "picture_url"
    t.integer  "checkin_rating"
  end

  create_table "roasters", force: :cascade do |t|
    t.string   "name",                                                                                                                                   null: false
    t.datetime "created_at",                                                                                                                             null: false
    t.datetime "updated_at",                                                                                                                             null: false
    t.string   "picture_url", default: "http://res.cloudinary.com/dfmvfna21/image/upload/c_scale,h_500/v1478211374/coffee-cup-working-happy_gsogqz.jpg"
  end

  add_index "roasters", ["name"], name: "index_roasters_on_name", unique: true, using: :btree

  create_table "shops_coffees", force: :cascade do |t|
    t.integer  "coffee_id",      null: false
    t.integer  "coffee_shop_id", null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                                          null: false
    t.string   "password_digest",                                                                                                   null: false
    t.string   "session_token",                                                                                                     null: false
    t.datetime "created_at",                                                                                                        null: false
    t.datetime "updated_at",                                                                                                        null: false
    t.string   "cover_photo_url", default: "http://res.cloudinary.com/dfmvfna21/image/upload/v1478825954/igfidzbaz4hiemcr3ez1.jpg"
    t.string   "picture_url",     default: "http://res.cloudinary.com/dfmvfna21/image/upload/v1478883513/ck7ayfpd6amcvb5fgunc.jpg"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
