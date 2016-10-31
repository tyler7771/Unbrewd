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
id          | integer   | not null, primary key
name        | string    | not null
roaster     | string    | not null
coffee_shop | string    | not null
roast_type  | string    | not null

## ratings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
coffee_id   | integer   | not null, foreign key (references coffees), indexed
author_id   | integer   | not null, foreign key (references users), indexed
date        | date      | not null
rating      | integer   | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
note_id     | integer   | not null, foreign key (references notes), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
