# Unbrewd

[Live Site](http://www.unbrewd.us)

Unbrewd is a full-stack web app based off Untapped.com to research and
review different coffees that they've tried. It uses Ruby on Rails on the
backend, PostgreSQL as the database, and React and Redux on the frontend.

## Features & Implementation

### Drink Pages

#### Creation and Editing

If a user's favorite coffee isn't in the list of coffee's in our database
they can add it. After clicking the link they are redirected to the new drinks
form. If they need to add a roaster there's a link that opens a modal with the
roaster form.

![Alt text](http://res.cloudinary.com/dfmvfna21/image/upload/v1478900738/Screen_Shot_2016-11-11_at_1.45.07_PM_2_ly5myc.png)

From the Coffee's show page, users have the ability to delete and updated drinks.
Deleting redirects them back to the all coffee's page. If updating, a modal is
opened and pre-filled with the coffee's current information.

![Alt text](http://res.cloudinary.com/dfmvfna21/image/upload/v1478898392/Screen_Shot_2016-11-11_at_1.05.44_PM_2_npvgex.png)

#### Drink index and show

The "All Coffees" page is a list of all the coffee's in the database with a description. Each list item links to the coffee's show page.

The show page show's all the coffee's information, update button, delete button, check-in button for reviewing and checking in, and the first 15 reviews for the coffee. At the bottom of the list there's a button to show all of the rest of the reviews.

Also on the coffee's show page there is a small table to display statistics for the drink.
That is calculated by rails using activerecord relations with users. I grab all the ratings
for a drink by passing in params with a type of request. Then calculate the number of all ratings, unique ratings, and then ratings by the current user.

```ruby
def self.find_by_params(params)
  if params && params[:type] == "drink"
    Drink.find_by(id: params[:id]).ratings
  elsif params && params[:type] == "user"
    return User.find_by(id: params[:id]).ratings
  else
    return Rating.all
  end
end

def self.statistics(params, current_user, type)
  if type == "create"
    return {all: 0, user: 0, unique: 0, average_rating: 0, count: 0}
  else
    ratings = self.find_by_params(params)
    if params || params[:type] == "drink"
      all = ratings.length

      user_statistic = ratings.select { |rating| rating.user.username == current_user.username }
      user_stat = user_statistic.length

      unique = ratings.count("DISTINCT user_id")

      sum = 0
      count = 0

      ratings.each do |rating|
        unless rating.checkin_rating.nil? || rating.checkin_rating == 0
          sum += rating.checkin_rating
          count += 1
        end
      end

      if count == 0
        average = 0
      else
        average = sum / count
      end
    else
      all = ratings.length
      unique = ratings.count("DISTINCT drink_id")
    end

    return {all: all, user: user_stat, unique: unique, average_rating: average, count: count}
  end
end
```

### Check-in and Review feed

On each coffee show page there's a check-in button that pulls up a check-in modal. If the user submits without any information it's considered a check-in and doesn't effect the coffee's average rating stats. The user also has the option to review the coffee by adding a description, rating, or both. A rating is then displayed based on the information it's is found in helper functions.

```js
checked (value) {
  if (value === this.props.rating.checkin_rating) {
    return "checked";
  } else {
    return "";
  }
}

descriptionView() {
  if (this.props.rating.description) {
    return (
      <p className="drink-index-description">
        {this.props.rating.description}
      </p>
    );
  }
}

ratingView() {
  if (this.props.rating.checkin_rating) {
    return (
      <div className="rating-details">
        {this.descriptionView()}
        <form id="ratingsForm">
          <div className="beans-rating">
            <input
              type="radio"
              name="bean"
              value="1"
              readOnly
              className="bean-1"
              id="bean-1"
              checked={this.checked(1)}/>
            <label className="bean-1" htmlFor="bean-1">1</label>
            <input
              type="radio"
              name="bean"
              value="2"
              readOnly
              className="bean-2"
              id="bean-2"
              checked={this.checked(2)}/>
            <label className="bean-2" htmlFor="bean-2">2</label>
            <input
              type="radio"
              name="bean"
              value="3"
              readOnly
              className="bean-3"
              id="bean-3"
              checked={this.checked(3)}/>
            <label className="bean-3" htmlFor="bean-3">3</label>
            <input
              type="radio"
              name="bean"
              value="4"
              readOnly
              className="bean-4"
              id="bean-4"
              checked={this.checked(4)}/>
            <label className="bean-4" htmlFor="bean-4">4</label>
            <input
              type="radio"
              name="bean"
              value="5"
              readOnly
              className="bean-5"
              id="bean-5"
              checked={this.checked(5)}/>
            <label className="bean-5" htmlFor="bean-5">5</label>
            <span></span>
          </div>
        </form>
      </div>
    );
  } else if (this.props.rating.description) {
    return (
      <div className="rating-details">
        <p className="drink-index-description">
          {this.props.rating.description}
        </p>
      </div>
    );
  }
}
```


There are 3 different feeds to check out the different coffees tried.

"The Roast" is a global feed of all coffees tried by all users. Each rating links to the
reviewer's page by the profile picture or reviewer's name and links to the reviewed coffee by the coffee title.

![Alt text](http://res.cloudinary.com/dfmvfna21/image/upload/v1478899402/Screen_Shot_2016-11-11_at_1.22.28_PM_2_evfsgf.png)

The "Recent Activity" feed (which is also the page the user is directed to on login) is
a list of the 15 most recent reviews the user has made.

The "Coffee History" is a full list of all coffees reviewed by the user.

The user can update or delete any of their ratings from any of these lists.

### Profile

The user's profile is where they can find a condensed list of their recent
activity. It also includes user information, and coffee stats. The stats includes
the number of coffees reviewed and individual roasts tried. This is calculated the same way that drink stats are calculated except using the user information to find ratings rather than the drink.

If it is the current user's page, there is a button to update their information.

## Future Additions to the Site

### Searching and Sorting

Add a search bar to search for users and coffees in the database. Sort the different feeds so that finding information of the different pages is easier.

### Top Rated

Add a top rated list for coffees and then a top rated for each individual
user. So users can see what's most popular and what other users like best.

### Comments, Tags, and Cheers

I'd like to add the ability to comment, tag, and add cheers to checkin's so the
site's a little more social.
