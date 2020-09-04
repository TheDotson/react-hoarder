import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getItemByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/items.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const allItems = response.data;
      const myStuff = [];

      if (allItems) {
        Object.keys(allItems).forEach((itemId) => {
          const item = allItems[itemId];
          item.id = itemId;
          myStuff.push(item);
        });
      }
      resolve(myStuff);
    })
    .catch((err) => reject(err));
});

const createItem = (newItem) => axios.post(`${baseUrl}/items.json`, newItem);

export default { createItem, getItemByUid };
