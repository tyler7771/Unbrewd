import React from 'react';

class RatingUpdateModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.rating.id,
      description: this.props.rating.description,
      picture_url: this.props.rating.picture_url,
      checkin_rating: this.props.rating.checkin_rating
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const rating = this.state;
    rating.checkin_rating = parseInt(this.state.checkin_rating);
    this.props.updateRating(rating);
    this.props.closeRatingModal();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  checked (value) {
    if (value === parseInt(this.state.checkin_rating)) {
      return "checked";
    } else {
      return "";
    }
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

  previewImage() {
    if (this.state.picture_url !== "") {
      return <img src={this.state.picture_url} className="modal-img"/>;
    }
  }

  render () {
    return (
      <div className="drink-form-box">
        <h1>Update Rating</h1>
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
                onChange={this.update("checkin_rating")}
                checked={this.checked(1)}/>
              <label className="checkin-bean-1" htmlFor="checkin-bean-1">1</label>

              <input type="radio"
                  name="checkin-bean"
                  value="2"

                  className="checkin-bean-2"
                  id="checkin-bean-2"
                  onChange={this.update("checkin_rating")}
                  checked={this.checked(2)}/>
                <label className="checkin-bean-2" htmlFor="checkin-bean-2">2</label>

              <input type="radio"
                name="checkin-bean"
                value="3"
                className="checkin-bean-3"
                id="checkin-bean-3"
                onChange={this.update("checkin_rating")}
                checked={this.checked(3)}/>

              <label className="checkin-bean-3" htmlFor="checkin-bean-3">3</label>

              <input type="radio"
                name="checkin-bean"
                value="4"
                className="checkin-bean-4"
                id="checkin-bean-4"
                onChange={this.update("checkin_rating")}
                checked={this.checked(4)}/>
              <label className="checkin-bean-4" htmlFor="checkin-bean-4">4</label>

              <input type="radio"
                name="checkin-bean"
                value="5"
                className="checkin-bean-5"
                id="checkin-bean-5"
                onChange={this.update("checkin_rating")}
                checked={this.checked(5)}/>
              <label className="checkin-bean-5" htmlFor="checkin-bean-5">5</label>

              <span></span>
            </div>
            {this.previewImage()}
            <button onClick={(e) => {
              e.preventDefault();
              window.cloudinary.openUploadWidget(window.cloudinary_options,
                function(error, results){
                      if(!error){
                        this.setState({picture_url: results[0].url});
                      }
                    }.bind(this));}}>
              Upload Image
            </button>
            <input type="submit" value="Update" />
          </form>
      </div>
    );
  }
}

export default RatingUpdateModal;
