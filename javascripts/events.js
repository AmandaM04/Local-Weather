/* eslint camelcase: 0 */

const {showCurrentResults, showFiveDayResults,} = require('./owm');
const fireBaseApi = require('./fireBaseApi');
const dom = require('./dom');

const navLinks = () => {
  $(document).click((e) => {
    if (e.target.id === 'authentication') {
      $('#mySaves').addClass('hide');
      $('#search').addClass('hide');
      $('#authScreen').removeClass('hide');
    } else if (e.target.id === 'mySavedForecast') {
      $('#mySaves').removeClass('hide');
      $('#search').addClass('hide');
      $('#authScreen').addClass('hide');
      getAllForecastEvent();
    } else if (e.target.id === 'navSearch') {
      $('#mySaves').addClass('hide');
      $('#search').removeClass('hide');
      $('#authScreen').addClass('hide');
    }
  });
};

const pressEnter = () => {
  $(document).keypress((e) => {
    if (e.key === 'Enter' && !$('#search').hasClass('hide')) {
      const searchZips = $('#searchBar').val();
      showCurrentResults(searchZips);
    }
  });
};

const today = (e) => {
  $(document).on('click', '.Today', (e) => {
    showCurrentResults();
  });
};

const fiveDayClick = (e) => {
  $(document).on('click', '.fiveDayButt', (e) => {
    showFiveDayResults();
  });
};

const saveWeatherEvent = () => {
  $(document).on('click', '.addToSaveList', (e) => {
    const forecastToAddCard = $(e.target).closest('.weather');
    const forecastToAdd = {
      city_name: $('#weatherDisplay .city-name').text(),
      conditions: forecastToAddCard.find('.weather-description').text(),
      temperature: forecastToAddCard.find('.weather-temp').text(),
      air_pressure: forecastToAddCard.find('.weather-pressure').text(),
      wind_speed: forecastToAddCard.find('.weather-speed').text(),
      is_Scary: false,
    };
    fireBaseApi.addWeatherToSaveList(forecastToAdd)
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
      dom.saveDom(weatherArray, '#savedForecastSelect');
    })
    .catch((error) => {
      console.error('error in get all forecast', error);
    });
};

const authEvents = () => {
  $('#signIn-btn').click((e) => {
    e.preventDefault();
    const email = $('#inputEmail').val();
    const password = $('#inputPassword').val();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.error('error with sign-in pg', error);
      });
  });

  $('#register-link').click(() => {
    $('#login-form').addClass('hide');
    $('#registration-form').removeClass('hide');
  });

  $('#logIn-link').click(() => {
    $('#login-form').removeClass('hide');
    $('#registration-form').addClass('hide');
  });

  $('#logOut').click(() => {
    firebase.auth().signOut().then(() => {
    }).catch((error) => {
      console.error('error from auth events', error);
    });
  });
};

const initializer = () => {
  navLinks();
  pressEnter();
  today();
  fiveDayClick();
  saveWeatherEvent();
  authEvents();
};

module.exports = {
  initializer,
  getAllForecastEvent,
};
