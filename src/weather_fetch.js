export async function getWeatherData(city, unit) {

  const weatherUrl =
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&key=NQRZQ6PZATME3XYWYW6T3H8MR&contentType=json`;

  const response =
    await fetch(weatherUrl);

  return response.json();
}