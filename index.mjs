const serverURL =
  'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&temperature_unit=fahrenheit&timezone=Europe%2FMoscow&forecast_days=14';

async function fetchAndProcessData() {
  try {
    let response = await fetch(serverURL);
    const data = await response.json();
    const daily = data.daily;
    console.log(daily);
    const emojiM = ['🌞', '⛅', '💧'];

    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';

    const trh = document.createElement('tr');
    const th = document.createElement('td');
    th.colSpan = 3;
    th.textContent = 'Погода на ближайшие 10 дней';
    th.style.textAlign = 'center';
    th.style.border = '1px black solid';
    trh.appendChild(th);
    table.appendChild(trh);

    for (let i = 0; i < 10; i++) {
      const tr = document.createElement('tr');
      const tempF =
        (data.daily.temperature_2m_max[i] + data.daily.temperature_2m_min[i]) /
        2;
      const sign = tempF > 32 ? '+' : '-';
      const tempC = (((tempF - 32) * 5) / 9).toFixed(1);
      const [year, month, day] = data.daily.time[i].split('-');
      const dayN = parseInt(day);
      const monthN = parseInt(month);
      let emoji;
      if (data.daily.precipitation_sum[i] === 0) {
        emoji = emojiM[0];
      } else if (data.daily.precipitation_sum[i] >= 2) {
        emoji = emojiM[2];
      } else {
        emoji = emojiM[1];
      }

      function getDayOfWeek(dateString) {
        const daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
        const date = new Date(dateString);
        const dayIndex = date.getDay();
        return daysOfWeek[dayIndex];
      }

      let daysOfWeek = getDayOfWeek(data.daily.time[i]);

      for (let j = 0; j < 3; j++) {
        const td = document.createElement('td');
        td.style.border = '1px black dashed';
        td.style.width = '90px';
        td.style.textAlign = 'center';

        if (j === 0) {
          td.textContent = `${dayN}.${monthN}`;
        } else if (j === 1) {
          td.textContent = `${daysOfWeek}`;
          if (daysOfWeek === 'сб' || daysOfWeek === 'вс') {
            td.style.color = 'red';
          } else if (daysOfWeek !== 'сб' || daysOfWeek !== 'вс') {
            td.style.color = 'gray';
          }
        } else if (j === 2) {
          td.textContent = `${sign}${tempC} ${emoji}`;
        } else {
          td.textContent = '';
        }

        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    document.body.appendChild(table);
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
}
fetchAndProcessData();
