import "./style.css";

import {
  getWeatherData
} from "./weather_fetch.js";

import {
  processWeatherData
} from "./weather_process.js";

import {
  displayWeather
} from "./weather_display.js";

const searchInput =
  document.getElementById("search");

const toggleButton =
  document.getElementById(
    "unit-toggle"
  );

let currentUnit = "us";
let currentCity = "";

toggleButton.addEventListener(
  "click",
  async () => {

    currentUnit =
      currentUnit === "us"
        ? "metric"
        : "us";

    if (currentCity) {

      const rawData =
        await getWeatherData(
          currentCity,
          currentUnit
        );

      const weather =
        processWeatherData(rawData);

      weather.unit =
        currentUnit === "us"
          ? "F"
          : "C";

      displayWeather(weather);
    }
  }
);

searchInput.addEventListener(
  "keypress",
  async (event) => {

    if (event.key === "Enter") {

      const city =
        searchInput.value;

        currentCity = city;

      const rawData =
        await getWeatherData(city, currentUnit);

      const weather =
        processWeatherData(rawData);

        weather.unit =
        currentUnit === "us"
            ? "F"
            : "C";
        

      displayWeather(weather);
    }
  }

);

