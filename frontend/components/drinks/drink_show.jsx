import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import UpdateModalContainer from './update_modal_container';

class DrinkShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalIsOpen: false };

    this.handleDelete = this.handleDelete.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchDrink(this.props.params.drinkId);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteDrink(this.props.params.drinkId);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
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

          <div className="drink-details">
            <p className="drink-show-roast-type">
              <span>Roast Type: </span>{drink.roast_type}
            </p>
            <form id="ratingsForm">
              <div className="beans">
                  <input type="radio" name="bean" disabled="disabled"
                    className="bean-1" id="bean-1"/>
                  <label className="bean-1" htmlFor="bean-1">1</label>
                  <input type="radio" name="bean" disabled="disabled"
                    className="bean-2" id="bean-2"/>
                  <label className="bean-2" htmlFor="bean-2">2</label>
                  <input type="radio" name="bean" disabled="disabled"
                    className="bean-3" id="bean-3"/>
                  <label className="bean-3" htmlFor="bean-3">3</label>
                  <input type="radio" name="bean" disabled="disabled"
                    className="bean-4" id="bean-4"/>
                  <label className="bean-4" htmlFor="bean-4">4</label>
                  <input type="radio" name="bean" disabled="disabled"
                    className="bean-5" id="bean-5"/>
                  <label className="bean-5" htmlFor="bean-5">5</label>
                  <span></span>
              </div>
            </form>
            <p>
              0<span> Ratings</span>
            </p>
          </div>

          <div className="drink-description">
            <p><span>Description: </span>{drink.description}</p>

            <div className="drink-crud-buttons">
              <a><button onClick={() => this.openModal()}>Update</button></a>
              <a><button onClick={this.handleDelete}>Delete</button></a>
              <a><button>Check-In</button></a>
            </div>
          </div>
        </div>

        <Modal
          className="update-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          >

          <UpdateModalContainer drink={drink} closeModal={this.closeModal}/>
        </Modal>
      </div>
    );
  }
}

export default DrinkShow;
