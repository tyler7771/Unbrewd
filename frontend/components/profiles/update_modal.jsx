import React from 'react';

class ProfileUpdateModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.user.id,
      username: this.props.user.username,
      picture_url: this.props.user.picture_url,
      cover_photo_url: this.props.user.cover_photo_url
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateProfile(this.state);
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

  previewProfileImage() {
    if (this.state.picture_url !== "") {
      return <img src={this.state.picture_url} className="modal-img"/>;
    }
  }

  previewCoverImage() {
    if (this.state.picture_url !== "") {
      return <img src={this.state.cover_photo_url} className="modal-img"/>;
    }
  }

  render () {
    return (
      <div className="drink-form-box">
        <h1>Update Drink</h1>
          {this.renderErrors()}
          <form onSubmit={this.handleSubmit} className="drink-form">
            <input type="text"
              className="coffee-create-name"
              value={this.state.username}
              onChange={this.update("username")} />
            {this.previewProfileImage()}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.cloudinary.openUploadWidget(window.cloudinary_options,
                    function(error, results){
                          if(!error){
                            this.setState({picture_url: results[0].url});
                          }
                        }.bind(this));}}>
                Upload Profile Photo
              </button>
              {this.previewCoverImage()}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.cloudinary.openUploadWidget(window.cloudinary_cover_options,
                    function(error, results){
                          if(!error){
                            this.setState({cover_photo_url: results[0].url});
                          }
                        }.bind(this));}}>
                Upload Cover Photo
              </button>
            <input type="submit" value="Update Profile" />
          </form>
      </div>
    );
  }
}

export default ProfileUpdateModal;
