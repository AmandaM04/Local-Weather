const owm = require('./owm');
const fireBaseApi = require('./fireBaseApi');
const {checkLoginStatus,} = require('./auth');

const apiKeys = () => {
  return new Promise((resolve, reject) => {
    $.ajax('./db/apiKeys.json')
      .done((data) => {
        resolve(data.apiKeys);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const retrieveKeys = () => {
  apiKeys()
    .then((results) => {
      owm.setKey(results.owm.apiKey);
      fireBaseApi.setConfig(results.firebase);
      firebase.initializeApp(results.firebase);
      checkLoginStatus();
    })
    .catch((err) => {
      console.error('no keys:', err);
    });
};

module.exports = {
  retrieveKeys,
};
