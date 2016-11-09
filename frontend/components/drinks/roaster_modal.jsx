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
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  previewImage() {
    if (this.state.picture_url !== "") {
      return <img src={this.state.picture_url} className="modal-img"/>;
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

  render () {
    return (
      <div className="drink-form-box">
        <h1>Create Roaster</h1>
          {this.renderErrors()}
          <form onSubmit={this.handleSubmit} className="drink-form">
            <input type="text"
              className="coffee-create-name"
              placeholder="Roaster Name"
              value={this.state.name}
              onChange={this.update("name")} />
            {this.previewImage()}
            <button
              onClick={(e) => {
                e.preventDefault();
                window.cloudinary.openUploadWidget(window.cloudinary_options,
                  function(error, results){
                        if(!error){
                          this.setState({picture_url: results[0].url});
                        }
                      }.bind(this));}}>
              Upload Logo
            </button>

            <input type="submit" value="Create Roaster" />
          </form>
      </div>
    );
  }
}

export default RoasterModal;
