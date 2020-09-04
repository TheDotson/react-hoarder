import React from 'react';
import itemShape from '../../../helpers/props/itemShape';
import './ItemCard.scss';

class ItemCard extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
  }

  render() {
    const { item } = this.props;

    return (
      <div className="card">
        <img className="card-img-top item-image" src={item.itemImage} alt={item.itemName}></img>
        <div className="card-body">
          <h5 className="card-title">{item.itemName}</h5>
          <p className="card-text">{item.itemDescription}</p>
        </div>
        <div className="card-footer">
          <i className="fas fa-trash-alt"></i>
          <i className="fas fa-edit"></i>
        </div>
      </div>
    );
  }
}

export default ItemCard;
