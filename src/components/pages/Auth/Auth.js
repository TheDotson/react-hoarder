import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  }

  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    const loginButton = authed
      ? <button className="btn btn-danger" onClick={this.logoutClickEvent}>Logout <i className="fas fa-sign-out-alt"></i></button>
      : <button className="btn btn-danger" onClick={this.loginClickEvent}>Google Login</button>;

    return (
      <div className="Auth">
        {loginButton}
      </div>
    );
  }
}

export default Auth;
