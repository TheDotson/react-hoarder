import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
// import authData from '../helpers/data/authData';
import fbConnection from '../helpers/data/connection';
import Navbar from '../components/pages/Navbar/Navbar';
import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.listener = firebase.auth().onAuthStateChanged((user) => {
      user ? this.setState({ authed: true }) : this.setState({ authed: false });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    const { authed } = this.state;

    // const loadComponent = () => {
    //   if (authed) {
    //     const uid = authData.getUid();
    //     return ;
    //   }
    //   return (
    //     <h2 className="text-center">Please login to view the roster</h2>
    //   );
    // }

    return (
      <div className="App">
        <h1>React-Hoarder</h1>
        <Navbar authed={authed}/>
      </div>
    );
  }
}

export default App;
