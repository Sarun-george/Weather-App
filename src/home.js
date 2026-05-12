const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-button');
const weatherContainer = document.getElementById("weather-main");  

searchInput.addEventListener('keypress', async function(event) {
  if (event.key === 'Enter') {
    const city = searchInput.value;
    const weather_url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=NQRZQ6PZATME3XYWYW6T3H8MR&contentType=json`;
    const weather_data = await fetch(weather_url);
    const weather_json = await weather_data.json();
    console.log(weather_json); 

     weatherContainer.innerHTML = "";

     const main_weather = document.createElement("div");
     main_weather.classList.add("main-weather");

     const city_name = document.createElement("h2");
     city_name.classList.add("city-name");
     city_name.textContent = weather_json.resolvedAddress;

     const temperature = document.createElement("h1");
     temperature.classList.add("temperature");
     temperature.textContent = `${weather_json.currentConditions.temp}°F`;

     const weather_condition = document.createElement("h3");
     weather_condition.classList.add("weather-condition");
     weather_condition.textContent = `${weather_json.currentConditions.conditions}`;
 
      weatherContainer.appendChild(main_weather);
      main_weather.appendChild(city_name);
      main_weather.appendChild(temperature);
      main_weather.appendChild(weather_condition);

      const additional_weather_info = document.createElement("div");
      additional_weather_info.classList.add("additional-weather-info");

     const additional_weather = document.createElement("div");  
     additional_weather.classList.add("additional-weather");

     const feels_like = document.createElement("p");
     feels_like.textContent = `Feels like: ${weather_json.currentConditions.feelslike}°F`;
     feels_like.classList.add("feels-like");

     const uv_index = document.createElement("p");
     uv_index.textContent = `UV Index: ${weather_json.currentConditions.uvindex}`;
     uv_index.classList.add("uv-index");

     const sunrise = document.createElement("p");
     sunrise.textContent = `Sunrise: ${weather_json.currentConditions.sunrise}`;
     sunrise.classList.add("sunrise");

      const sunset = document.createElement("p");
      sunset.textContent = `Sunset: ${weather_json.currentConditions.sunset}`;
      sunset.classList.add("sunset");

      const visibility = document.createElement("p");
      visibility.textContent = `Visibility: ${weather_json.currentConditions.visibility} miles`;
      visibility.classList.add("visibility");

       const secondary_additional_weather = document.createElement("div");
       secondary_additional_weather.classList.add("secondary-additional-weather");

      const wind_speed = document.createElement("p");
      wind_speed.textContent = `Wind Speed: ${weather_json.currentConditions.windspeed} mph`;
      wind_speed.classList.add("wind-speed");

      const wind_direction = document.createElement("p");
      wind_direction.textContent = `Wind Direction: ${weather_json.currentConditions.winddir}°`;
      wind_direction.classList.add("wind-direction");

      const wind_gust = document.createElement("p");
      wind_gust.textContent = `Wind Gust: ${weather_json.currentConditions.windgust} mph`;
      wind_gust.classList.add("wind-gust");

      const dew_point = document.createElement("p");
      dew_point.textContent = `Dew Point: ${weather_json.currentConditions.dew}°F`;
      dew_point.classList.add("dew-point");

      const humidity = document.createElement("p");
      humidity.textContent = `Humidity: ${weather_json.currentConditions.humidity}%`;
      humidity.classList.add("humidity");

      const pressure = document.createElement("p");
      pressure.textContent = `Pressure: ${weather_json.currentConditions.pressure} mb`;
      pressure.classList.add("pressure");

     weatherContainer.appendChild(additional_weather_info);
     additional_weather_info.appendChild(additional_weather);
     additional_weather_info.appendChild(secondary_additional_weather);
      additional_weather.appendChild(feels_like);
      additional_weather.appendChild(uv_index);
      additional_weather.appendChild(sunrise);
      additional_weather.appendChild(sunset);
      additional_weather.appendChild(visibility);
      secondary_additional_weather.appendChild(wind_speed);
      secondary_additional_weather.appendChild(wind_direction);
      secondary_additional_weather.appendChild(wind_gust);
      secondary_additional_weather.appendChild(dew_point);
      secondary_additional_weather.appendChild(humidity);
      secondary_additional_weather.appendChild(pressure);

  }
});

searchButton.addEventListener('click', async function() {
  const city = searchInput.value;
  const weather_url = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=NQRZQ6PZATME3XYWYW6T3H8MR&contentType=json
`);
  console.log(weather_url);
});

function processWeatherData(data) {
  return {
    city: data.resolvedAddress,

    temperature:
      data.currentConditions.temp,

    condition:
      data.currentConditions.conditions,

    humidity:
      data.currentConditions.humidity,

    windspeed:
      data.currentConditions.windspeed,
  };
}

