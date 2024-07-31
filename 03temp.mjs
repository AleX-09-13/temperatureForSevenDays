async function fetchWeatherData(x) {
  const emojiM = ['🌞', '⛅', '💧'];

  function convertFahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * (5 / 9)).toFixed(1);
  }

  try {
    const response = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_min,temperature_2m_max,precipitation_sum&temperature_unit=fahrenheit&timezone=Europe%2FMoscow&forecast_days=14'
    );
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();

    const dailyDataLength = data.daily.temperature_2m_min.length;
    if (x >= 0 && x < dailyDataLength) {
      const tempFS =
        (data.daily.temperature_2m_min[x] + data.daily.temperature_2m_max[x]) /
        2;
      let emoji = emojiM;
      switch (true) {
        case data.daily.precipitation_sum[x] === 0:
          emoji = emojiM[0];
          break;
        case data.daily.precipitation_sum[x] >= 0.1 &&
          data.daily.precipitation_sum[x] <= 0.2:
          emoji = emojiM[1];
          break;
        case data.daily.precipitation_sum[x] > 0.2:
          emoji = emojiM[2];
          break;
      }

      let sign = data.daily.temperature_2m_min[x] > 32 ? '+' : '-';
      const tempC = `${sign}${convertFahrenheitToCelsius(tempFS)} ${emoji}`;
      return tempC;
    } else {
      return 'Данные отсутствуют';
    }
  } catch (error) {
    console.error('Ошибка:', error);
    return 'Ошибка при получении данных';
  }
}

export default fetchWeatherData;
