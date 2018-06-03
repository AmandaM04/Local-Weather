const owm = require('./owm');
// const dom = require('./dom');

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

const initializer = () => {
  pressEnter();
  // fiveDay();
  today();
  // singleWeather();
  fiveDayClick();
  // buildFiveDay();
};

module.exports = {
  initializer,
};
