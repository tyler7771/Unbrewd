# Unbrewd

[Live Site](https://unbrewd.herokuapp.com/)

Unbrewd is a full-stack web app based off Untapped.com to research and
review different coffees that they've tried. It uses Ruby on Rails on the
backend, PostgreSQL as the database, and React and Redux on the frontend.

## Features & Implementation

### Drink Creation and Editing

Users have the ability to create, read, update, and delete drinks in the
database. In this form they log the date they tried the coffee, basic info,
and their rating. It's then added to the global feed and their own coffee
feed.

### Review feed

There are 2 different feeds to check out the different coffees tried. The
global feed is an updated feed of all coffees tried by all users as coffees
are reviewed.

The user coffee feed is an individuals personal list of coffees tried and
reviewed that's updated when they review a coffee.

### Profile

The user's profile is where they can find their coffee feed. It also includes
a user's profile photo, cover photo, and coffee stats. The stats includes
the number of coffees reviewed and individual roasts tried.
