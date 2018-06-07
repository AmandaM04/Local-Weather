// const {getAllForecastEvents,} = require('./events'); // if you have multiple function being called from same file. just add a comma inside the curly brackets and write them out {blah, blah, blah,}
const {setUID,} = require('./fireBaseApi');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged ((user) => {
    if (user) {
      setUID(user.uid);
      $('#mySaves').removeClass('hide');
      $('#search').addClass('hide');
      $('#authScreen').addClass('hide');
      $('#mySavedForecast, #navSearch, #logOut').removeClass('hide');
      $('#authentication').addClass('hide');
      // getAllForecastEvents();
    } else {
      $('#mySaves').addClass('hide');
      $('#search').addClass('hide');
      $('#authScreen').removeClass('hide');
      $('#mySavedForecast, #navSearch, #logOut').addClass('hide');
      $('#authentication').removeClass('hide');
    }
  });
};

module.exports = {
  checkLoginStatus,
};
