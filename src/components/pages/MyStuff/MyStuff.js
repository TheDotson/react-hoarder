import React from 'react';
import itemData from '../../../helpers/data/itemData';
import authData from '../../../helpers/data/authData';
import ItemCard from '../../shared/ItemCard/ItemCard';
import './MyStuff.scss';

class MyStuff extends React.Component {
  state = {
    items: [],
  }

  componentDidMount() {
    itemData.getItemByUid(authData.getUid())
      .then((items) => this.setState({ items }))
      .catch((err) => console.error('Get items failed', err));
  }

  render() {
    const { items } = this.state;
    const itemCards = items.map((item) => <ItemCard key={item.id} item={item}/>);

    return (
      <div>
        <h1>My Stuff</h1>
        <div className="item-container">
          {itemCards}
        </div>
      </div>
    );
  }
}

export default MyStuff;
