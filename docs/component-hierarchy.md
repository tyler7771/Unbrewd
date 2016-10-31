# Api Endpoints

**RootPage**
  - Welcome

**AuthFormContainer**
  - AuthForm

**HomeContainer**
  - Globalfeed
  - Sidebar
  - Header
  - Footer

**RatingFormContainer**
  - Rating Form

**Search**
  - SearchResults

**CoffeeProfileContainer**
  - CoffeeStats
  - CoffeeFeed

**UserProfileContainer**
  - UserStats
  - UserFeed

**UserCoffeeContainer**
  - UserCoffeeStats

**VenueContainer**
  - Venue Stats

**NewVenueContainer**
  - NewVenue

**TopContainer**
  - Coffee Index Items
  - Venue Index Items

**Tags**
  - Auto Search Results

  ## Routes

  |Path   | Component   |
  |-------|-------------|
  | "/sign-up" | "AuthFormContainer" |
  | "/sign-in" | "AuthFormContainer" |
  | "/home" | "HomeContainer" |
  | "/coffees/new" | "RatingsFormContainer" |
  | "/coffees/:coffeeId/" | "CoffeeProfileContainer" |
  | "/users/:userId/" | "UserProfileContainer" |
  | "/users/:userId/coffees/" | "UserCoffeeContainer" |
  | "/search" | "Search" |
  | "/venues/new" | "NewVenueContainer" |
  | "/venues/:venueId" | "VenueContainer" |
  | "/top/coffee" | "TopContainer" |
  | "/top/venue" | "TopContainer" |
  | "/tag/search" | "TagSearch" |
  | "/tag/new" | "NewTag" |
