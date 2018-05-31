const dom = require('./dom');

let owmKey = '';

const setKey = (key) => {
  owmKey = key;
};

const searchOWM = () => {
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

const showResults = (searchZips) => {
  searchOWM(searchZips)
    .then((result) => {
      const weatherArray = [];
      weatherArray.push(result);
      dom.singleWeather(weatherArray);
      // dom.buildFiveDay(weatherArray);
    })
    .catch((err) => {
      console.error('search error:', err);
    });
};

module. exports = {
  showResults,
  setKey,
};
