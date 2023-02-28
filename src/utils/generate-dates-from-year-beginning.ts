import dayjs from 'dayjs';

export const generateDatesFromYearBeginning = () => {
  // Pegando a data do começo do ano
  const firstDayOfTheYear = dayjs().startOf("year");
  const today = new Date();

  const dates = [];
  let compareDate = firstDayOfTheYear;

  // Enquanto a comparação for igual a hoje
  while (compareDate.isBefore(today)) {
    dates.push(compareDate.toDate());
    compareDate = compareDate.add(1, "day");
  }

  return dates;
};
