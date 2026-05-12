export function processWeatherData(data) {

  return {

    city:
      data.resolvedAddress,

    temperature:
      data.currentConditions.temp,

    condition:
      data.currentConditions.conditions,

    feelsLike:
      data.currentConditions.feelslike,

    uvIndex:
      data.currentConditions.uvindex,

    sunrise:
      data.currentConditions.sunrise,

    sunset:
      data.currentConditions.sunset,

    visibility:
      data.currentConditions.visibility,

    windSpeed:
      data.currentConditions.windspeed,

    windDirection:
      data.currentConditions.winddir,

    windGust:
      data.currentConditions.windgust,

    dewPoint:
      data.currentConditions.dew,

    humidity:
      data.currentConditions.humidity,

    pressure:
      data.currentConditions.pressure,
  };
}