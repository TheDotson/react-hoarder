import React from 'react';
import _ from 'underscore';
import authData from '../../../helpers/data/authData';
import stuffData from '../../../helpers/data/stuffData';

class NewItem extends React.Component {
  state = {
    itemImage: '',
    itemName: '',
    itemDescription: '',
  }

  changeImageEvent = (e) => {
    e.preventDefault();
    this.setState({ itemImage: e.target.value });
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
  }

  changeDescriptionEvent = (e) => {
    e.preventDefault();
    this.setState({ itemDescription: e.target.value });
  }

  createItem = (e) => {
    e.preventDefault();

    const keys = ['itemDescription', 'itemName', 'itemImage'];

    const newItem = _.pick(this.state, keys);
    newItem.uid = authData.getUid();

    stuffData.addItem(newItem)
      .then((res) => {
        console.error(res);
        this.props.history.push(`/mystuff/${res.data.name}`);
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="form-wrapper">
        <h1 className="text-center">Create New Item</h1>
        <form>
          <div className="form-group">
            <label htmlFor="item-name">Item Name</label>
            <input type="text" className="form-control" id="item-name" placeholder="Enter Item Name" onChange={this.changeNameEvent}/>
          </div>
          <div className="form-group">
            <label htmlFor="item-image">Item Image</label>
            <input type="text" className="form-control" id="item-image" placeholder="Enter Image URL" onChange={this.changeImageEvent} />
          </div>
          <div className="form-group">
            <label htmlFor="item-description">Item Description</label>
            <input type="text" className="form-control" id="item-description" placeholder="Enter Item Description" onChange={this.changeDescriptionEvent}/>
          </div>
          <button className="btn btn-light" onClick={this.createItem}>Create</button>
        </form>
      </div>
    );
  }
}

export default NewItem;
