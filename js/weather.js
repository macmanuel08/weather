const apiKey = '4c6ee178fbcaa341e556052daf49c4ef';
let cityName = document.querySelector("#cityid").textContent;

let cityid;

if (cityName == "Preston") {
  cityid = 5604473;
} else if (cityName == "Soda Springs") {
  cityid = 5607916;
} else if (cityName == "Fish Haven") {
  cityid = 5585000;
}

const apiURL = `//api.openweathermap.org/data/2.5/weather?id=${cityid}&appid=${apiKey}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    
    const weather = weatherInfo.weather[0].description.replace(
      /(^\w{1})|(\s+\w{1})/g,
      (letter) => letter.toUpperCase()
    );


    const current_temp = Math.round(weatherInfo.main.temp);
    const humidity = Math.round(weatherInfo.main.humidity);
    const windspeed = Math.round(weatherInfo.wind.speed);

    document.getElementById("weather").innerHTML = weather;
    document.getElementById("temperature").innerHTML = current_temp;
    document.getElementById("humidity").innerHTML = humidity;
    document.getElementById("windspeed").innerHTML = windspeed;

    let windchill = 35.74 + 0.6215 * current_temp - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * current_temp * Math.pow(windspeed, 0.16);

    let roundWC = Math.round(windchill);

    if (current_temp <= 50 && windspeed > 3) {
      document.getElementById("windchill").innerHTML = `${roundWC}&degF`;
    } else {
      document.getElementById("windchill").innerHTML = "N/A";
    }
  });