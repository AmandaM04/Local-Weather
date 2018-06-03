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
      .done((uniqueKey) => {
        resolve(uniqueKey);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getAllForecast = () => {
  return new Promise((resolve, reject) => {
    const allForecastArray = [];
    $.ajax({
      method: 'GET',
      url: `${fireBaseConfig.databaseURL}/weathers.json`,
    })
      .done((allForecastObject) => {
        if (allForecastObject !== null) {
          Object.keys(allForecastObject).forEach((fbKey) => {
            allForecastObject[fbKey].id = fbKey;
            allForecastObject.push(allForecastObject[fbKey]);
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
