const weatherContainer =
  document.getElementById("weather-main");

export function displayWeather(weather) {

  weatherContainer.innerHTML = "";

  // MAIN WEATHER CARD

  

  const mainWeather =
    document.createElement("div");

  mainWeather.classList.add(
    "main-weather"
  );

  const cityName =
    document.createElement("h2");

  cityName.classList.add(
    "city-name"
  );

  cityName.textContent =
    weather.city;

  const temperature =
    document.createElement("h1");

  temperature.classList.add(
    "temperature"
  );

  temperature.textContent =
    `${weather.temperature}°${weather.unit}`;

  const condition =
    document.createElement("h3");

  condition.classList.add(
    "weather-condition"
  );

  condition.textContent =
    weather.condition;

  mainWeather.append(
    cityName,
    temperature,
    condition
  );

  // ADDITIONAL WEATHER INFO CONTAINER

  const additionalWeatherInfo =
    document.createElement("div");

  additionalWeatherInfo.classList.add(
    "additional-weather-info"
  );

  // LEFT SECTION

  const additionalWeather =
    document.createElement("div");

  additionalWeather.classList.add(
    "additional-weather"
  );

  const feelsLike =
    document.createElement("p");

  feelsLike.classList.add(
    "feels-like"
  );

  feelsLike.textContent =
    `Feels Like: ${weather.feelsLike}°F`;

  const uvIndex =
    document.createElement("p");

  uvIndex.classList.add(
    "uv-index"
  );

  uvIndex.textContent =
    `UV Index: ${weather.uvIndex}`;

  const sunrise =
    document.createElement("p");

  sunrise.classList.add(
    "sunrise"
  );

  sunrise.textContent =
    `Sunrise: ${weather.sunrise}`;

  const sunset =
    document.createElement("p");

  sunset.classList.add(
    "sunset"
  );

  sunset.textContent =
    `Sunset: ${weather.sunset}`;

  const visibility =
    document.createElement("p");

  visibility.classList.add(
    "visibility"
  );

  visibility.textContent =
    `Visibility: ${weather.visibility} miles`;

  additionalWeather.append(
    feelsLike,
    uvIndex,
    sunrise,
    sunset,
    visibility
  );

  // RIGHT SECTION

  const secondaryAdditionalWeather =
    document.createElement("div");

  secondaryAdditionalWeather.classList.add(
    "secondary-additional-weather"
  );

  const windSpeed =
    document.createElement("p");

  windSpeed.classList.add(
    "wind-speed"
  );

  windSpeed.textContent =
    `Wind Speed: ${weather.windSpeed} mph`;

  const windDirection =
    document.createElement("p");

  windDirection.classList.add(
    "wind-direction"
  );

  windDirection.textContent =
    `Wind Direction: ${weather.windDirection}°`;

  const windGust =
    document.createElement("p");

  windGust.classList.add(
    "wind-gust"
  );

  windGust.textContent =
    `Wind Gust: ${weather.windGust} mph`;

  const dewPoint =
    document.createElement("p");

  dewPoint.classList.add(
    "dew-point"
  );

  dewPoint.textContent =
    `Dew Point: ${weather.dewPoint}°F`;

  const humidity =
    document.createElement("p");

  humidity.classList.add(
    "humidity"
  );

  humidity.textContent =
    `Humidity: ${weather.humidity}%`;

  const pressure =
    document.createElement("p");

  pressure.classList.add(
    "pressure"
  );

  pressure.textContent =
    `Pressure: ${weather.pressure} mb`;

  secondaryAdditionalWeather.append(
    windSpeed,
    windDirection,
    windGust,
    dewPoint,
    humidity,
    pressure
  );

  // APPEND EVERYTHING

  additionalWeatherInfo.append(
    additionalWeather,
    secondaryAdditionalWeather
  );

  weatherContainer.append(
    mainWeather,
    additionalWeatherInfo
  );
}