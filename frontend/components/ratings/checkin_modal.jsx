import React from 'react';

class CheckInModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drink_id: this.props.drink.id,
      description: "",
      picture_url: "",
      checkin_rating: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const rating = this.state;
    rating.checkin_rating = parseInt(this.state.checkin_rating);
    debugger
    this.props.createRating(rating);
    this.props.closeModal();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    if (this.props.errors) {
      return(
        <ul className="welcome-errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  checked (value) {
    let rating = parseInt(this.state.rating);
    if (value === rating) {
      return "checked";
    } else {
      return "";
    }
  }

  render () {
    return (
      <div className="drink-form-box">
        <h1>CheckIn Drink</h1>
          {this.renderErrors()}
          <form onSubmit={this.handleSubmit} className="checkin-form">
            <textarea
  						className="coffee-create-description"
  						placeholder="Coffee Description"
  						value={this.state.description}
  						onChange={this.update("description")} />
            <div className="beans-form-checkin">
              <input type="radio"
                name="checkin-bean"
                value="1"
                className="checkin-bean-1"
                id="checkin-bean-1"
                onChange={this.update("checkin_rating")}/>
              <label className="checkin-bean-1" htmlFor="checkin-bean-1">1</label>

              <input type="radio"
                  name="checkin-bean"
                  value="2"

                  className="checkin-bean-2"
                  id="checkin-bean-2"
                  onChange={this.update("checkin_rating")}/>
                <label className="checkin-bean-2" htmlFor="checkin-bean-2">2</label>

              <input type="radio"
                name="checkin-bean"
                value="3"
                className="checkin-bean-3"
                id="checkin-bean-3"
                onChange={this.update("checkin_rating")}/>
              <label className="checkin-bean-3" htmlFor="checkin-bean-3">3</label>

              <input type="radio"
                name="checkin-bean"
                value="4"
                className="checkin-bean-4"
                id="checkin-bean-4"
                onChange={this.update("checkin_rating")}/>
              <label className="checkin-bean-4" htmlFor="checkin-bean-4">4</label>

              <input type="radio"
                name="checkin-bean"
                value="5"
                className="checkin-bean-5"
                id="checkin-bean-5"
                onChange={this.update("checkin_rating")}/>
              <label className="checkin-bean-5" htmlFor="checkin-bean-5">5</label>

              <span></span>
            </div>
            <button>Upload Image</button>
            <input type="submit" value="Check In" />
          </form>
      </div>
    );
  }
}

export default CheckInModal;
