import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getStuffByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/stuff.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const stuffObj = response.data;
      const stuff = [];
      if (stuffObj) {
        Object.keys(stuffObj).forEach((stuffId) => {
          stuffObj[stuffId].id = stuffId;
          stuff.push(stuffObj[stuffId]);
        });
      }
      resolve(stuff);
    })
    .catch((err) => reject(err));
});

const getItemById = (itemId) => axios.get(`${baseUrl}/stuff/${itemId}.json`);

const addItem = (newItem) => axios.post(`${baseUrl}/stuff.json`, newItem);

const deleteItem = (itemId) => axios.delete(`${baseUrl}/stuff/${itemId}.json`);

const updateItem = (itemId, updatedItem) => axios.put(`${baseUrl}/stuff/${itemId}.json`, updatedItem);

export default {
  getStuffByUid,
  getItemById,
  addItem,
  deleteItem,
  updateItem,
};
