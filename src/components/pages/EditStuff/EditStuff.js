import React from 'react';

class EditStuff extends React.Component {
  render() {
    const { stuffId } = this.props.match.params;
    return (
      <div className="EditStuff">
        <h1>Editing Stuff ID: ${stuffId}</h1>
      </div>
    );
  }
}

export default EditStuff;
