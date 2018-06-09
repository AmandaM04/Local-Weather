const singleWeather = (weather) => {
  let domString = '';
  domString += `<div class="text-center">`;
  domString += `<h1>Current</h1>`;
  domString += `<h4 class="city-name">${weather.name}</h4>`;
  domString += `<p>Conditions: ${weather.weather[0].main}</p>`;
  domString += `<p>Temp: ${weather.main.temp}&degF</p>`;
  domString += `<p>Hi: ${weather.main.temp_max}&degF / Low: ${weather.main.temp_min}&degF</p>`;
  domString += `<p>Air Pressure: ${weather.main.pressure}</p>`;
  domString += `<p>Wind Speed: ${weather.wind.speed}</p>`;
  printToDom('#weatherDisplay', domString);
};

const buildFiveDay = (weatherArray) => {
  let domStrang = '';
  domStrang += `<h1>5 Day Forecast</h1>`;
  weatherArray.forEach((weather, index) => {
    if (index % 8 === 0) {
      domStrang += `<div class="col-sm-6 col-md-4">`;
      domStrang += `<div class="thumbnail weather">`;
      domStrang += `<div class="caption">`;
      domStrang += `<div class="weather-main"${weather.weather[0].main}>`;
      domStrang += `<p>Temp: <span class="weather-temp">${weather.main.temp}</span>&degF</p>`;
      domStrang += `<p>Description: <span class="weather-description">${weather.weather[0].description}</span></p>`;
      domStrang += `<p class="weather-hilow">Hi: ${weather.main.temp_max}&degF / Low:${weather.main.temp_min}&degF</p>`;
      domStrang += `<p>Air Pressure: <span class="weather-pressure">${weather.main.pressure}</span></p>`;
      domStrang += `<p>Wind Speed: <span class="weather-speed">${weather.wind.speed}</span></p>`;
      domStrang += `<p><a class="btn btn-default addToSaveList" role="button">Save</a></p>`;
      domStrang += `</div>`;
      domStrang += `</div>`;
      domStrang += `</div>`;
      domStrang += `</div>`;
    }
  });
  printToDom('#weatherFiveDisplay', domStrang);
};

const printToDom = (id, string) => {
  $(id).html(string);
};

const saveEventDom = (saveArray, divId) => {
  let domStrang = '';
  saveArray.forEach((weather) => {
    // not yet using id or is_Scary
    domStrang += `<div class="col-sm-6 col-md-4">`;
    domStrang += `<div class="thumbnail weather">`;
    domStrang += `<div class="caption">`;
    domStrang += `<h4>${weather.city_name}</h4>`;
    domStrang += `<p>Location: ${weather.air_pressure}</p>`;
    domStrang += `<p>Conditions: ${weather.conditions}</p>`;
    domStrang += `<p>Temp: ${weather.temperature}&degF</p>`;
    domStrang += `<p>Wind: ${weather.wind_speed}</p>`;
    domStrang += `</div>`;
    domStrang += `</div>`;
    domStrang += `</div>`;
  });
  printToDom(divId, domStrang);
};

module.exports = {
  singleWeather,
  buildFiveDay,
  saveEventDom,
};
