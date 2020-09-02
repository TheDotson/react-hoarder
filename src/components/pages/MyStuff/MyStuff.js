import React from 'react';

class MyStuff extends React.Component {
  render() {
    return (
      <div>
        <h1>My Stuff</h1>
        <button className="btn btn-secondary">Single</button>
        <button className="btn btn-warning">Edit</button>
      </div>
    );
  }
}

export default MyStuff;
