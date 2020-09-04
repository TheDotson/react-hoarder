import React from 'react';
import itemData from '../../../helpers/data/itemData';
import authData from '../../../helpers/data/authData';

class NewStuff extends React.Component {
  state = {
    itemName: '',
    itemDescription: '',
    itemImage: '',
  }

  changeNameEvent = (e) => {
    this.setState({ itemName: e.target.value });
  }

  changeDescriptionEvent = (e) => {
    this.setState({ itemDescription: e.target.value });
  }

  changeImageEvent = (e) => {
    this.setState({ itemImage: e.target.value });
  }

  saveItemEvent = (e) => {
    e.preventDefault();
    const { itemName, itemDescription, itemImage } = this.state;

    const newItem = {
      itemName,
      itemDescription,
      itemImage,
      uid: authData.getUid(),
    };

    itemData.createItem(newItem)
      .then((res) => {
        this.props.history.push(`/stuff${res.data.name}`);
      })
      .catch((err) => { console.error('Create new item failed', err); });
  }

  render() {
    const { itemImage, itemName, itemDescription } = this.state;
    return (
      <div className="NewStuff">
        <h1>New Stuff</h1>
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="itemName">Name</label>
            <input
              type="text"
              className="form-control"
              id="itemName"
              placeholder="Name"
              value={itemName}
              onChange={this.changeNameEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="itemDescription">Description</label>
            <input
              type="text"
              className="form-control"
              id="itemDescription"
              placeholder="Description"
              value={itemDescription}
              onChange={this.changeDescriptionEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="itemImage">Image URL</label>
            <input
              type="text"
              className="form-control"
              id="itemImage"
              placeholder="Image URL"
              value={itemImage}
              onChange={this.changeImageEvent}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.saveItemEvent}>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewStuff;
