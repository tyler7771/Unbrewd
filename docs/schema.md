# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null

## coffees
column name | data type | details
------------|-----------|-----------------------
id             | integer   | not null, primary key
name           | string    | not null
roaster_id     | integer   | not null
coffee_shop_id | integer   | not null
roast_type     | string    | not null

## ratings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
coffee_id   | integer   | not null, foreign key (references coffees), indexed
author_id   | integer   | not null, foreign key (references users), indexed
date        | date      | not null
rating      | integer   | not null

## roasters
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## roasts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
coffee_id   | integer   | not null, foreign key (references coffees), indexed
roaster_id  | integer   | not null, foreign key (references roasters), indexed
            |           | unique :roaster_id :scope => [:coffee_id]

## coffee_shops
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## shops_coffees
column name | data type | details
------------|-----------|-----------------------
id             | integer   | not null, primary key
coffee_id      | integer   | not null, foreign key (references coffees), indexed
coffee_shop_id | integer   | not null, foreign key (references coffee_shops), indexed
               |           | unique :coffee_shop_id :scope => [:coffee_id]

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
review_id   | integer   | not null, foreign key (references review), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
