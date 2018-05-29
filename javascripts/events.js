const owm = require('./owm');

//  ---- Validates Zip Code ---- //
// function checkZip(value) {
//   return (/(^\d{5}$)|(^\d{5}-\d{4}$)/).test(value);
// };

const pressEnter = () => {
  $(document).keypress((e) => {
    if (e.key === 'Enter') {
      const searchZips = $('#searchBar').val();
      owm.showResults(searchZips);
    }
  });
};

const fiveDay = () => {
  $(document).keypress((e) => {
    if (e.key === 'Enter') {
      const searchZips = $('#searchBar').val();
      owm.showResults(searchZips);
    }
  });
};

const today = () => {
  $('.Today').click(fiveDayClick);
};

const fiveDayClick = () => {
  $('.fiveDayButt').click();
};

const initializer = () => {
  pressEnter();
  fiveDay();
  today();
  fiveDayClick();
};

module.exports = {
  initializer,
};
