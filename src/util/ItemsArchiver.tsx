// Use.
import { getMonth, getYear, isAfter, isBefore } from 'date-fns';

const ItemsArchiver = (items: Array<any>) => {
  const { nextYearsRawArch, currentYearRawArch, pastYearsRawArch } =
    splitByCategory(items);

  const nextYearsArch = splitByYear(nextYearsRawArch);
  const currentYearArch = orderByMonth(splitByMonth(currentYearRawArch));
  const pastYearsArch = splitByYear(pastYearsRawArch);

  return { nextYearsArch, currentYearArch, pastYearsArch };
};

export { ItemsArchiver };

const splitByCategory = (items: Array<any>) => {
  const currentDate = new Date();
  const nextYearsRawArch: Array<any> = [];
  const currentYearRawArch: Array<any> = [];
  const pastYearsRawArch: Array<any> = [];

  items.forEach((item) => {
    const itemDate = new Date(item.date);

    if (isBefore(getYear(itemDate), getYear(currentDate))) {
      pastYearsRawArch.push(item);
    } else if (isAfter(getYear(itemDate), getYear(currentDate))) {
      nextYearsRawArch.push(item);
    } else {
      currentYearRawArch.push(item);
    }
  });

  return { nextYearsRawArch, currentYearRawArch, pastYearsRawArch };
};

const splitByYear = (items: Array<any>) => {
  const archivedYears: Array<any> = [];

  items.forEach((item) => {
    const itemDate = new Date(item.date);
    const itemYear = getYear(itemDate);

    if (!archivedYears.includes(itemYear)) {
      archivedYears.push(itemYear);
    }
  });

  return archivedYears;
};

const splitByMonth = (items: Array<any>) => {
  const archivedMonths: Array<any> = [];

  items.forEach((item) => {
    const itemDate = new Date(item.date);
    const itemMonth = getMonth(itemDate);

    if (!archivedMonths.includes(itemMonth)) {
      archivedMonths.push(itemMonth);
    }
  });

  return archivedMonths;
};

const orderByMonth = (items: Array<number>) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const orderedMonths: Array<string> = [];
  const orderedRawMonths = items.sort((a, b) => (a < b ? -1 : 1));

  orderedRawMonths.forEach((rawMonth) => {
    orderedMonths.push(months[rawMonth]);
  });

  return orderedMonths;
};
