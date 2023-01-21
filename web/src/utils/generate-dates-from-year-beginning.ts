import dayjs from "dayjs";

export function generateDatesFromYearBeginning() {
  const firstDayOfYear = dayjs().startOf('year');
  const today = new Date();

  const dates = [];
  let compare = firstDayOfYear;
  
  while (compare.isBefore(today)) { 
    dates.push(compare.toDate());
    compare = compare.add(1, 'day');
  }

  return dates;
}