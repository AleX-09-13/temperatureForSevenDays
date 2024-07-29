async function fetchWeatherData(x) {
  function convertFahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * (5 / 9)).toFixed(1);
  }

  try {
    const response = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max&temperature_unit=fahrenheit&timezone=Europe%2FMoscow&forecast_days=14'
    );
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();
    let sign = data.daily.temperature_2m_max[x] > 32 ? '+' : '-';
    const tempC = `${sign}${convertFahrenheitToCelsius(
      data.daily.temperature_2m_max[x]
    )}`;

    console.log(tempC);
    return tempC;
  } catch (error) {
    console.error('Ошибка:, error');
  }
}
fetchWeatherData();
export default fetchWeatherData;
