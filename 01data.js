//Получаем дату в первой колонке
export function dataNamber(indNextData) {
  const data = new Date(); // текущая дата
  data.setDate(data.getDate() + indNextData); // устанавливаем следующий день

  const nextDay = String(data.getDate()).padStart(2, '0'); // получаем день с ведущим нулем
  const month = String(data.getMonth() + 1).padStart(2, '0'); // получаем месяц (месяцы начинаются с 0)
  const dataNamber = `${nextDay}.${month}`;

  return dataNamber;
}
