const owm = require('./owm');

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
    })
    .catch((err) => {
      console.error('no keys:', err);
    });
};

module.exports = {
  retrieveKeys,
};
