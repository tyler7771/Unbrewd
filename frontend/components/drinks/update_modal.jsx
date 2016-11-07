import React from 'react';

class UpdateModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.drink.id,
      name: this.props.drink.name,
      roaster_id: this.props.drink.roaster.id,
      roast_type: this.props.drink.roast_type,
      description: this.props.drink.description
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchRoasters();
  }

  handleSubmit(e) {
    e.preventDefault();
    const drink = this.state;
    drink.roaster_id = parseInt(this.state.roaster_id);
    this.props.updateDrink(drink);
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

  render () {
    return (
      <div className="drink-form-box">
        <h1>Update Drink</h1>
          {this.renderErrors()}
          <form onSubmit={this.handleSubmit} className="drink-form">
            <div className="select-style">
            <select
              className="coffee-create-roaster"
              value={this.state.roaster_id}
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
            <input type="submit" value="Update Drink" />
          </form>
      </div>
    );
  }
}

export default UpdateModal;
