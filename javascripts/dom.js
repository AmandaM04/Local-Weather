const singleWeather = (weatherArray) => {
  let domString = '';
  weatherArray.forEach((weatherSingle) => {
    domString += `<div class="col-sm-6 col-md-4" text-center>`;
    domString += `<h3>${weatherSingle.name}</h3>`;
    domString += `<p>${weatherSingle.weather[0].main}: ${weatherSingle.main.temp}&degF</p>`;
    domString += `<p><span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span> ${weatherSingle.main.temp_min}&degF  <span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span> ${weatherSingle.main.temp_max}&degF</p>`;
    domString += `<p>Air Pressure: ${weatherSingle.main.pressure}</p>`;
    domString += `<p>Wind Speed: ${weatherSingle.wind.speed}</p>`;
    domString += `<div>`;
  });
  printToDom(domString);
};

const buildFiveDay = (weatherArray) => {
  let domString = '';
  weatherArray.forEach((weatherAll) => {
    const dayTime = weatherAll.dt_txt.replace(/21:00:00/, '').replace(/2018-/, '').split(' ');
    domString += `<div${weatherAll.weather[0].main}>`;
    domString += `<h2>${dayTime[0]}</h2>`;
    domString += `<p>${weatherAll.weather[0].description}: ${weatherAll.main.temp}&degF</p>`;
    domString += `<p><span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span> ${weatherAll.main.temp_min}&degF  <span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span> ${weatherAll.main.temp_max}&degF</p>`;
    domString += `<p>Air Pressure: ${weatherAll.main.pressure}</p>`;
    domString += `<p>Wind Speed: ${weatherAll.wind.speed}</p>`;
    domString += `</div>`;
  });
  $('#weatherFiveDisplay').html(domString);
};

const printToDom = (domString) => {
  $('#weatherDisplay').html(domString);
};

module.exports = {
  singleWeather,
  buildFiveDay,
};
