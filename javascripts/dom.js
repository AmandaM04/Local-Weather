const singleWeather = (weather) => {
  let domString = '';
  // weatherArray.forEach((weatherSingle) => {
  domString += `<div class="text-center">`;
  domString += `<h3>${weather.name}</h3>`;
  domString += `<p>Conditions: ${weather.weather[0].main}</p>`;
  domString += `<p>Temp: ${weather.main.temp}&degF</p>`;
  domString += `<p>Min: ${weather.main.temp_min}&degF / Max: ${weather.main.temp_max}&degF</p>`;
  domString += `<p>Air Pressure: ${weather.main.pressure}</p>`;
  domString += `<p>Wind Speed: ${weather.wind.speed}</p>`;
  domString += `<div>`;
  // });
  printToDom('#weatherDisplay', domString);
};

const buildFiveDay = (weatherArray) => {
  let domStrang = '';
  weatherArray.forEach((weather, index) => {
    // const dayTime = (weather.dt_txt * 1000);
    if (index % 8 === 0) {
      domStrang += `<div class="col-sm-6 col-md-4">`;
      domStrang += `<div class="thumbnail five-day-cards">`;
      domStrang += `<div class="caption">`;
      // domStrang += `<h3>${weather.weather.name}</h3>`;
      domStrang += `<div${weather.weather[0].main}>`;
      // domStrang +=      `<h2>${dayTime[0]}</h2>`;
      domStrang += `<p>${weather.weather[0].description}: ${weather.main.temp}&degF</p>`;
      domStrang += `<p>Min: ${weather.main.temp_min}&degF  Max:${weather.main.temp_max}&degF</p>`;
      domStrang += `<p>Air Pressure: ${weather.main.pressure}</p>`;
      domStrang += `<p>Wind Speed: ${weather.wind.speed}</p>`;
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

module.exports = {
  singleWeather,
  buildFiveDay,
};
