export function dayName(di) {
  const data = new Date(); // Создаем новый объект Date с текущей датой
  const dayIndex = data.getDay() + di;

  // Массив с названиями дней недели
  const daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

  // Получаем индекс следующего дня
  const nextDayIndex = (dayIndex + 1) % 7;

  // Получаем название следующего дня недели по индексу
  const dayName = daysOfWeek[nextDayIndex];

  return dayName;
}
