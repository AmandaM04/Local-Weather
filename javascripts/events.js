const owm = require('./owm');
const fireBaseApi = require('./fireBaseApi');
const dom = require('./dom');

const pressEnter = () => {
  $(document).keypress((e) => {
    if (e.key === 'Enter') {
      const searchZips = $('#searchBar').val();
      owm.showCurrentResults(searchZips);
    }
  });
};

const today = (e) => {
  $(document).on('click', '.Today', (e) => {
    owm.showCurrentResults();
  });
};

const fiveDayClick = (e) => {
  $(document).on('click', '.fiveDayButt', (e) => {
    // $('.fiveDayButt').show();
    owm.showFiveDayResults();
  });
};

const saveWeatherEvent = () => {
  $(document).on('click', '.addToSaveList', (e) => {
    fireBaseApi.addWeatherToSaveList()
      .then(() => {
      })
      .catch((error) => {
        console.error('error in saving weather', error);
      });
  });
};

const getAllForecastEvent = () => {
  fireBaseApi.getAllForecast()
    .then((weatherArray) => {
      dom.domStrang(weatherArray, 'savedMovies');
    })
    .catch((error) => {
      console.error('error in get all movies', error);
    });
};

const initializer = () => {
  pressEnter();
  today();
  fiveDayClick();
  saveWeatherEvent();
};

module.exports = {
  initializer,
};
