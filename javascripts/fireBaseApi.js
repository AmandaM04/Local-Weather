let fireBaseConfig = {};
let uid = '';

const setConfig = (fbConfig) => {
  fireBaseConfig = fbConfig;
};

const setUID = (newUID) => {
  uid = newUID;
};

const addWeatherToSaveList = (newSaveWet) => {
  newSaveWet.uid = uid;
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${fireBaseConfig.databaseURL}/forecast.json`,
      data: JSON.stringify(newSaveWet),
    })
      .done((newWeatherFirebaseUniqueKey) => {
        resolve(newWeatherFirebaseUniqueKey);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getAllForecast = () => {
  return new Promise((resolve, reject) => {
    const allForecastArray = [];
    $.ajax({
      method: 'GET', // READ
      url: `${fireBaseConfig.databaseURL}/forecast.json?orderBy="uid"&equalTo="${uid}"`,
    })
      .then((allForecastObject) => {
        if (allForecastObject !== null) {
          Object.keys(allForecastObject).forEach((fbKey) => {
            allForecastObject[fbKey].id = fbKey;
            allForecastArray.push(allForecastObject[fbKey]);
          });
        }
        resolve(allForecastArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getSavedForecast = () => {
  return new Promise((resolve, reject) => {
    const allForecastArray = [];
    $.ajax({
      method: 'GET',
      url: `${fireBaseConfig.databaseURL}/forecast.json?orderBy="uid"&equalTo="${uid}"`,
    })
      .done((allForecastObject) => {
        if (allForecastObject !== null) {
          Object.keys(allForecastObject).forEach((fbKey) => {
            allForecastObject[fbKey].id = fbKey;
            allForecastArray.push(allForecastObject[fbKey]);
          });
        }
        resolve(allForecastArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  addWeatherToSaveList,
  setConfig,
  setUID,
  getAllForecast,
  getSavedForecast,
};
