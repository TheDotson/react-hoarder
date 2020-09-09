import React from 'react';
import _ from 'underscore';
import stuffData from '../../../helpers/data/stuffData';
import authData from '../../../helpers/data/authData';

class EditItem extends React.Component {
  state = {
    itemImage: '',
    itemName: '',
    itemDescription: '',
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    stuffData.getItemById(itemId)
      .then((res) => {
        this.setState({ itemImage: res.data.itemImage, itemName: res.data.itemName, itemDescription: res.data.itemDescription });
      })
      .catch((err) => console.error(err));
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

  updateItemEvent = (e) => {
    e.preventDefault();
    const { itemId } = this.props.match.params;
    const keys = ['itemDescription', 'itemName', 'itemImage'];

    const updatedItem = _.pick(this.state, keys);
    updatedItem.uid = authData.getUid();

    stuffData.updateItem(itemId, updatedItem)
      .then((res) => {
        this.props.history.push(`/mystuff/${itemId}`);
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { itemImage, itemName, itemDescription } = this.state;

    return (
      <div className="form-wrapper">
        <h1 className="text-center">Edit {itemName}</h1>
        <form>
          <div className="form-group">
            <label htmlFor="item-name">Item Name</label>
            <input type="text" className="form-control" id="item-name" placeholder="Enter Item Name" value={itemName} onChange={this.changeNameEvent}/>
          </div>
          <div className="form-group">
            <label htmlFor="item-image">Item Image</label>
            <input type="text" className="form-control" id="item-image" placeholder="Enter Image URL" value={itemImage} onChange={this.changeImageEvent} />
          </div>
          <div className="form-group">
            <label htmlFor="item-description">Item Description</label>
            <input type="text" className="form-control" id="item-description" placeholder="Enter Item Description" value={itemDescription} onChange={this.changeDescriptionEvent}/>
          </div>
          <button className="btn btn-light" onClick={this.updateItemEvent}>Update</button>
        </form>
      </div>
    );
  }
}

export default EditItem;
