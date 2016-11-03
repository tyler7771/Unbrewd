import React from 'react';
import { hashHistory, withRouter, Link } from 'react-router';
import SessionForm from '../sessionForm/session_form';

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {type: "button"};
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  handleGuestLogin(e) {
    e.preventDefault();
    this.props.login({user: {username: "guest", password: "password"}});
  }

  handleSignup(e) {
    e.preventDefault();
    return (
      <SessionForm formType = "signup" action={this.props.signup}/>
    );
  }

  handleLogin(e) {
    e.preventDefault();
    return (
      <SessionForm formType = "login" action={this.props.login}/>
    );
  }

  formShowing() {
    if (this.state.type === "button") {
      return (
        <div className="welcome-buttons">
          <button onClick={ (e) => this.handleButton(e, "login") }>Login</button>
          <button onClick={ (e) => this.handleButton(e, "signup") }>Signup</button>
          <button onClick={ (e) => this.handleButton(e, "guest") }>Sign in as Guest</button>
        </div>
      );
    } else if (this.state.type === "signup") {
      this.setState({type: "signup"});
    } else {
      this.setState({type: "login"});
    }
  }

  handleButton(e, type) {
    e.preventDefault();
    if (type === "guest") {
      this.props.login({user: {username: "guest", password: "password"}});
    } else if (type === "signup") {
      return (
        <SessionForm formType = "signup" action={this.props.signup}/>
      );
    } else {
      return (
        <SessionForm formType = "login" action={this.props.login}/>
      );
    }
  }

  render () {
    return (
      <div className="background">
        <div className="welcome">
          <img className="logo" src="http://res.cloudinary.com/dfmvfna21/image/upload/v1478119908/Coffee_Decorative_Text_PNG_Vector_Clipart_1_wf6ey5.png" />
          <div className="welcome-text">
            <p>DISCOVER AND SHARE</p>
            <p>YOUR FAVORITE COFFEES</p>
          </div>
          {this.formShowing()}
        </div>
      </div>
    );
  }
}

export default Welcome;
