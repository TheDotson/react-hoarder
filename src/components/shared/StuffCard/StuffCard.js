import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import itemShape from '../../../helpers/props/itemShape';
import './StuffCard.scss';

class StuffCard extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
    deleteItem: PropTypes.func.isRequired,
  }

  deleteItemEvent = (e) => {
    e.preventDefault();
    const { deleteItem, item } = this.props;
    deleteItem(item.id);
  }

  render() {
    const { item } = this.props;
    const singleItemLink = `/mystuff/${item.id}`;
    const editItemLink = `/edit/${item.id}`;

    return (
      <div className="card">
        <div className="card-body">
        <div className="card-title">
          <h4 className="text-center">{item.itemName}</h4>
        </div>
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

export default StuffCard;
