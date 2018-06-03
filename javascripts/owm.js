const dom = require('./dom');

let owmKey = '';

const setKey = (key) => {
  owmKey = key;
};

const currentWeather = () => {
  const zipCode = $('#searchBar').val();
  return new Promise((resolve, reject) => {
    $.ajax(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&APPID=${owmKey}`)
      .done((result) => {
        resolve(result);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const fiveDayWeather = () => {
  const zipCode = $('#searchBar').val();
  return new Promise((resolve, reject) => {
    $.ajax(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&units=imperial&APPID=${owmKey}`)
      .done((result) => {
        resolve(result);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const showCurrentResults = (searchZips) => {
  currentWeather(searchZips)
    .then((result) => {
      // const weatherArray = [];
      // weatherArray.push(result);
      dom.singleWeather(result);
    })
    .catch((err) => {
      console.error('search error:', err);
    });
};

const showFiveDayResults = (searchZips) => {
  fiveDayWeather(searchZips)
    .then((result) => {
      const weatherArray = [];
      weatherArray.push(result);
      dom.buildFiveDay(result.list);
    })
    .catch((err) => {
      console.error('search error', err);
    });
};

module.exports = {
  setKey,
  currentWeather,
  showCurrentResults,
  fiveDayWeather,
  showFiveDayResults,
};
