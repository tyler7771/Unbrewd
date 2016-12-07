# Api Endpoints

## HTML API

### Root
- `GET /` - loads React web app

## JSON API

### Users
- `POST /api/users`
- `GET /api/users/:id`
- `GET /api/users`

### Session
- `POST /api/session`
- `Delete /api/session`

### Coffee(Drinks)
- `POST /api/coffees`
- `GET /api/coffees/`
- `GET /api/coffees/:id`
- `PATCH /api/coffees/:id`
- `Delete /api/coffees/:id`

### Coffee(User)
- `GET /api/users/:id/coffees` - Index of all coffees a user has rated
  - can add query params to search
- `GET /api/users/:id/coffees/:id` - User's review of coffee

### Venue
- `POST /api/shops`
- `GET /api/shops/`
- `GET /api/shops/:id`
- `GET /api/shops/:id/coffees`
  - View all coffees a shop has
- `PATCH /api/shops/:id`
- `Delete /api/shops/:id`

### Badges
- `POST /api/badges`
- `GET /api/badges/`
- `GET /api/badges/:id`
- `PATCH /api/badges/:id`
- `Delete /api/badges/:id`

### Tags (if I get to it)
- Included on Coffee Show Page
- `GET /api/tags/`
- `POST /api/coffees/:id/tags`
- `DELETE /api/coffees/:id/tags`
