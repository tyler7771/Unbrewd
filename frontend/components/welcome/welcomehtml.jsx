import React from 'react';
import { hashHistory, withRouter, Link } from 'react-router';
import SessionForm from '../sessionForm/session_form_container';

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
      <SessionForm formType = "Log in" action={this.props.login}/>
    );
  }

  formShowing() {
    if (this.state.type === "button") {
      return (
        <div>
          <div className="welcome-text">
            <p>DISCOVER AND SHARE</p>
            <p>YOUR FAVORITE COFFEES</p>
          </div>
          <div className="welcome-buttons">
            <button onClick={ (e) => this.handleButton(e, "login") }>Login</button>
            <button onClick={ (e) => this.handleButton(e, "signup") }>Signup</button>
            <button onClick={ (e) => this.handleButton(e, "guest") }>Sign in as Guest</button>
          </div>
        </div>
      );
    } else if (this.state.type === "signup") {
      return (
        <div className="auth-form">
          <SessionForm formType = "Sign up" action={this.props.signup}/>
          <span className="form-redirect">
            <p>Already a member? &nbsp;
              <a onClick={ (e) => this.handleButton(e, "login") }>Log in!</a>
            </p>
          </span>
        </div>
      );
    } else {
      return (
        <div className="auth-form">
          <SessionForm formType = "Log in" action={this.props.login}/>
          <button onClick={ (e) => this.handleButton(e, "guest") }>Sign in as Guest</button>
          <span className="form-redirect">
            <p>Not a member? &nbsp;
              <a onClick={ (e) => this.handleButton(e, "signup") }>Sign up!</a>
            </p>
          </span>
        </div>
      );
    }
  }

  handleButton(e, type) {
    e.preventDefault();
    if (type === "guest") {
      this.props.login({user: {username: "guest", password: "password"}});
    } else if (type === "signup") {
      if (!this.props.currentUser) {
        this.setState({type: "signup"});
      } else {
        hashHistory.push("/");
      }
    } else {
      if (!this.props.currentUser) {
        this.setState({type: "login"});
      } else {
        hashHistory.push("/");
      }
    }
  }

  render () {
    return (
      <div>
        <div className="background">
        </div>
        <div className="opacity"></div>
        <div className="welcome-content">
          <img className="logo" src="http://res.cloudinary.com/dfmvfna21/image/upload/c_scale,h_108/v1478714046/unbrewdOfficial-white_nwmhph.png" />
          <div className="welcome">
            {this.formShowing()}
          </div>
          </div>
      </div>
    );
  }
}

export default Welcome;
