import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>React-Hoarder</h1>
        <button className="btn btn-danger">
        <i className="fas fa-gem"></i> Hoard <i className="fas fa-gem"></i></button>
      </div>
    );
  }
}

export default App;
