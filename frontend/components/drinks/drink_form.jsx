import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import RoasterModalContainer from './roaster_modal_container';

class DrinkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      roaster_id: 1,
      roast_type: "",
      description: ""
    };

    this.state = { modalIsOpen: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchRoasters();
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    const drink = this.state;
    drink.roaster_id = parseInt(this.state.roaster_id);
    this.props.createDrink({drink});
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


  render () {
    return (
      <div className="drink-form-page">
        <div className="drink-form-box">
          <h1>New Drink</h1>
          {this.renderErrors()}
  				<form onSubmit={this.handleSubmit} className="drink-form">
            <span>Your favorite roaster's not in the list? &nbsp;
              <a onClick={() => this.openModal()}>Add Roaster!</a>
            </span>
            <div className="select-style">
            <select
  						className="coffee-create-roaster"
  						value={this.state.roaster}
  						onChange={this.update("roaster_id")}>
              <option>Roaster</option>
              {
                this.props.roasters.map(roaster => (
                  <option key={roaster.id}
                    value={roaster.id}>{roaster.name}
                  </option>
                ))
              }
            </select>
          </div>


            <Modal
              className="roaster-modal"
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              >

              <RoasterModalContainer closeModal={this.closeModal}/>
            </Modal>

  					<input type="text"
  						className="coffee-create-name"
  						placeholder="Coffee Name"
  						value={this.state.name}
  						onChange={this.update("name")} />
            <div className="select-style">
            <select
  						className="coffee-create-roast-type"
  						value={this.state.roast_type}
  						onChange={this.update("roast_type")}>
              <option>Roast Type</option>
              <option value="Light">Light</option>
              <option value="Medium-Light">Medium-Light</option>
              <option value="Medium">Medium</option>
              <option value="Medium-Dark">Medium-Dark</option>
              <option value="Dark">Dark</option>
              <option value="French Roast">French Roast</option>
              <option value="Espresso">Espresso</option>
            </select>
            </div>
            <textarea
  						className="coffee-create-description"
  						placeholder="Coffee Description"
  						value={this.state.description}
  						onChange={this.update("description")} />
            <input type="submit" value="Create Drink" />
  				</form>
        </div>
      </div>
    );
  }
}


export default DrinkForm;
