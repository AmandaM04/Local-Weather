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
    if (e.key === 'Enter') {
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
      dom.domStrang(weatherArray, 'savedForecastSelect');
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
        console.error('error with signin pg', error);
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
