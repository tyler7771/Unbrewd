import React from 'react';

class RoasterModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      picture_url: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createRoaster(this.state);
    this.props.closeModal();
  }

  update(field) {
    debugger
    return e =>
      {e.preventDefault();
      this.setState({
      [field]: e.currentTarget.value
    });};
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

  render () {
    return (
      <div className="drink-form-box">
        <h1>Create Roaster</h1>
          {this.renderErrors()}
          <form onSubmit={this.handleSubmit} className="drink-form">
            <input type="text"
              className="coffee-create-name"
              placeholder="Coffee Name"
              value={this.state.name}
              onChange={this.update("name")} />
            <button
              onClick={(e) => {
                e.preventDefault();
                window.cloudinary.openUploadWidget(window.cloudinary_options,
                this.update("picture_url"));}}>
              Upload Logo
            </button>

            <input type="submit" value="Create Roaster" />
          </form>
      </div>
    );
  }
}

export default RoasterModal;
