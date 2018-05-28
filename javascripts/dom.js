const domString = (weatherArray) => {
  let singleWeather = '';
  weatherArray.forEach((weatherSingle) => {
    singleWeather += `<div class="col-sm-6 col-md-4" text-center>`;
    singleWeather += `<h3>${weatherSingle.name}</h3>`;
    singleWeather += `<p>${weatherSingle.weather[0].main}: ${weatherSingle.main.temp}&degF</p>`;
    singleWeather += `<p><p><span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span> ${weatherSingle.main.temp_min}&degF  <span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span> ${weatherSingle.main.temp_max}&degF</p>`;
    singleWeather += `<p>Air Pressure: ${weatherSingle.main.pressure}</p>`;
    singleWeather += `<p>Wind Speed: ${weatherSingle.wind.speed}</p>`;
    singleWeather += `<div>`;
  });
  printToDom(singleWeather);
};

const printToDom = (wetString) => {
  $('#weatherDisplay').html(wetString);
};

module.exports = {
  domString,
};
