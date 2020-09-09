import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import itemShape from '../../../helpers/props/itemShape';
import './ItemCard.scss';

class ItemCard extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
    deleteItem: PropTypes.func.isRequired,
  }

  deleteItemEvent = (e) => {
    e.preventDefault();
    const { item, deleteItem } = this.props;
    deleteItem(item.id);
  }

  render() {
    const { item } = this.props;
    const editItemLink = `/edit/${item.id}`;
    const singleItemLink = `/stuff/${item.id}`;

    return (
      <div className="card">
        <img className="card-img-top item-image" src={item.itemImage} alt={item.itemName}></img>
        <div className="card-body">
          <h5 className="card-title">{item.itemName}</h5>
          <p className="card-text">{item.itemDescription}</p>
        </div>
        <div className="card-footer">
          <Link to={singleItemLink} className="btn btn-secondary"><i className="far fa-eye"></i></Link>
          <Link to={editItemLink} className="btn btn-warning"><i className="fas fa-edit"></i></Link>
          <button className="btn btn-danger" onClick={this.deleteItemEvent}><i className="fas fa-trash-alt"></i></button>
        </div>
      </div>
    );
  }
}

export default ItemCard;
