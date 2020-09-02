import React from 'react';
import Auth from '../Auth/Auth';
import './Navbar.scss';

class Navbar extends React.Component {
  render() {
    const { authed } = this.props;

    return (
      <nav className="navbar navbar-expand-lg">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item"><Auth authed={authed}/></li>
      </ul>
    </nav>
    );
  }
}

export default Navbar;
