let fireBaseConfig = {};

const setConfig = (fbConfig) => {
  fireBaseConfig = fbConfig;
};

const addWeatherToSaveList = (newSaveWet) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${fireBaseConfig.databaseURL}/weathers.json`,
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
  const allForecastArray = [];
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'GET', // READ
      url: `${fireBaseConfig.databaseURL}/weathers.json`,
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

module.exports = {
  addWeatherToSaveList,
  setConfig,
  getAllForecast,
};
