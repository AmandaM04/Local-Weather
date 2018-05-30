const domString = (weatherArray) => {
  let singleWeather = '';
  weatherArray.forEach((weatherSingle) => {
    singleWeather += `<div class="col-sm-6 col-md-4" text-center>`;
    singleWeather += `<h3>${weatherSingle.name}</h3>`;
    singleWeather += `<p>${weatherSingle.weather[0].main}: ${weatherSingle.main.temp}&degF</p>`;
    singleWeather += `<p><span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span> ${weatherSingle.main.temp_min}&degF  <span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span> ${weatherSingle.main.temp_max}&degF</p>`;
    singleWeather += `<p>Air Pressure: ${weatherSingle.main.pressure}</p>`;
    singleWeather += `<p>Wind Speed: ${weatherSingle.wind.speed}</p>`;
    singleWeather += `<div>`;
  });
  printToDom(singleWeather);
};

const buildFiveDay = (weatherArray) => {
  let weekWeather = '';
  weatherArray.forEach((weatherAll) => {
    const dayTime = weatherAll.dt_txt.replace(/21:00:00/, '').replace(/2018-/, '').split(' ');
    weekWeather += `<div${weatherAll.weather[0].main}>`;
    weekWeather += `<h2>${dayTime[0]}</h2>`;
    weekWeather += `<p>${weatherAll.weather[0].description}: ${weatherAll.main.temp}&degF</p>`;
    weekWeather += `<p><span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span> ${weatherAll.main.temp_min}&degF  <span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span> ${weatherAll.main.temp_max}&degF</p>`;
    weekWeather += `<p>Air Pressure: ${weatherAll.main.pressure}</p>`;
    weekWeather += `<p>Wind Speed: ${weatherAll.wind.speed}</p>`;
    weekWeather += `</div>`;
  });
  $('#weatherFiveDisplay').html(weekWeather);
};

const printToDom = (wetString) => {
  $('#weatherDisplay').html(wetString);

};

module.exports = {
  domString,
  buildFiveDay,
};
