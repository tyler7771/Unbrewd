import React from 'react';
import { Link } from 'react-router';

class DrinkShow extends React.Component {
  componentDidMount() {
    this.props.fetchDrink(this.props.params.drinkId);
  }

  render () {
    const drink = this.props.drink;
    if (!drink) {
      return <div>Loading...</div>;
    }

    return (
      <div className="drink-show">
        <div className="drink-show-item">
          <div className="snapshot">
            <img className="drink-show-image" src={drink.roaster.picture_url} />

            <div className="drink-show-snapshot">
              <h1 className="drink-show-title">{drink.name}</h1>
              <p className="drink-show-roaster">
                {drink.roaster.name}
              </p>
            </div>

            <table className="drink-statistics">
              <tbody>
                <tr>
                  <th className="table-tl">
                    <p className="stat-title">TOTAL</p>
                    <p className="stat-number">0</p>
                  </th>
                  <th className="table-tr">
                    <p className="stat-title">UNIQUE</p>
                    <p className="stat-number">0</p>
                  </th>
                </tr>
                <tr>
                  <th className="table-bl"></th>
                  <th>
                    <p className="stat-title">YOU</p>
                    <p className="user-stat-number">0</p>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="drink-show-information">
            <p className="drink-show-roast-type">
              <span>Roast Type: </span>{drink.roast_type}
            </p>
            <form id="ratingsForm">
              <div className="beans">
                  <input type="radio" name="bean" className="bean-1" id="bean-1" />
                  <label className="bean-1" htmlFor="bean-1">1</label>
                  <input type="radio" name="bean" className="bean-2" id="bean-2" />
                  <label className="bean-2" htmlFor="bean-2">2</label>
                  <input type="radio" name="bean" className="bean-3" id="bean-3" />
                  <label className="bean-3" htmlFor="bean-3">3</label>
                  <input type="radio" name="bean" className="bean-4" id="bean-4" />
                  <label className="bean-4" htmlFor="bean-4">4</label>
                  <input type="radio" name="bean" className="bean-5" id="bean-5" />
                  <label className="bean-5" htmlFor="bean-5">5</label>
                  <span></span>
              </div>
          </form>
          </div>

          <p className="drink-show-description">
            <span>Description: </span>{drink.description}
          </p>
        </div>
      </div>
    );
  }
}

export default DrinkShow;
