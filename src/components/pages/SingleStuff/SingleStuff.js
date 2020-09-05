import React from 'react';
import { Link } from 'react-router-dom';
import itemShape from '../../../helpers/props/itemShape';
import itemData from '../../../helpers/data/itemData';

class SingleStuff extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
  }

  state = {
    item: {},
  }

  getItemData = () => {
    const { itemId } = this.props.match.params;
    itemData.getItemById(itemId)
      .then((res) => this.setState({ item: res.data }))
      .catch((err) => console.error('Get single item failed', err));
  }

  componentDidMount() {
    this.getItemData();
  }

  deleteItemEvent = (e) => {
    e.preventDefault();
    const { itemId } = this.props.match.params;
    itemData.deleteItem(itemId)
      .then(() => {
        this.props.history.push('/stuff');
      })
      .catch((err) => console.error('Delete item failed', err));
  }

  render() {
    const { item } = this.state;
    const editItemLink = `/edit/${item.id}`;

    return (
      <div className="card">
        <img className="card-img-top item-image" src={item.itemImage} alt={item.itemName}></img>
        <div className="card-body">
          <h5 className="card-title">{item.itemName}</h5>
          <p className="card-text">{item.itemDescription}</p>
        </div>
        <div className="card-footer">
          <Link to={editItemLink} className="btn btn-warning"><i className="fas fa-edit"></i></Link>
          <button className="btn btn-danger" onClick={this.deleteItemEvent}><i className="fas fa-trash-alt"></i></button>
          <i className="fas fa-edit"></i>
        </div>
      </div>
    );
  }
}

export default SingleStuff;
