import React from 'react';
import { Link } from 'react-router-dom';
import stuffData from '../../../helpers/data/stuffData';
import './SingleItem.scss';

class SingleItem extends React.Component {
  state= {
    item: {},
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    stuffData.getItemById(itemId)
      .then((res) => this.setState({ item: res.data }))
      .catch((err) => console.error(err));
  }

  deleteItem = (e) => {
    e.preventDefault();
    const { itemId } = this.props.match.params;

    stuffData.deleteItem(itemId)
      .then(() => {
        this.props.history.push('/mystuff');
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { item } = this.state;
    const { itemId } = this.props.match.params;
    const editItemLink = `/edit/${itemId}`;

    return (
      <div className="single-item">
        <h1>{item.itemName}</h1>
        <img className="single-img" src={item.itemImage} alt={item.itemName}></img>
        <div>
          <p className="description">{item.itemDescription}</p>
        </div>
        <div className="card-footer">
          <Link to={editItemLink} className="btn btn-warning"><i className="fas fa-edit"></i></Link>
          <button className="btn btn-danger" onClick={this.deleteItem}><i className="fas fa-trash-alt"></i></button>
        </div>
      </div>
    );
  }
}

export default SingleItem;
