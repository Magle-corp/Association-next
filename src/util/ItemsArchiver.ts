// Use.
import { getMonth, getYear, isAfter, isBefore } from 'date-fns';
import { Event } from '../type';

/**
 * Return an object containing three arrays.
 * - nextYearsArchives : array of the next years of publication.
 * - currentYearArch : array of publication months for the current year.
 * - pastYearsArch : array of the past years of publication.
 *
 * @param items
 */
const ItemsArchiver = (items: Array<Event>) => {
  const { nextYearsRawArch, currentYearRawArch, pastYearsRawArch } =
    splitByCategory(items);

  const nextYearsArch = splitByYear(nextYearsRawArch);
  const currentYearArch = orderByMonth(splitByMonth(currentYearRawArch));
  const pastYearsArch = splitByYear(pastYearsRawArch);

  return { nextYearsArch, currentYearArch, pastYearsArch };
};

export { ItemsArchiver };

/**
 * Return an event object sorted in three arrays.
 * - nextYearsArchives
 * - currentYearArch
 * - pastYearsArch
 *
 * @param items
 *   Array of Strapi custom content type "Event".
 */
const splitByCategory = (items: Array<Event>) => {
  const currentDate = new Date();
  const nextYearsRawArch: Array<Event> = [];
  const currentYearRawArch: Array<Event> = [];
  const pastYearsRawArch: Array<Event> = [];

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

/**
 * Return an array of the next years of publication.
 *
 * @param items
 *   Array of Strapi custom content type "Event".
 */
const splitByYear = (items: Array<Event>) => {
  const archivedYears: Array<number> = [];

  items.forEach((item) => {
    const itemDate = new Date(item.date);
    const itemYear = getYear(itemDate);

    if (!archivedYears.includes(itemYear)) {
      archivedYears.push(itemYear);
    }
  });

  return archivedYears;
};

/**
 * Return an array of publication months for the current year.
 *
 * @param items
 *   Array of Strapi custom content type "Event".
 */
const splitByMonth = (items: Array<Event>) => {
  const archivedMonths: Array<number> = [];

  items.forEach((item) => {
    const itemDate = new Date(item.date);
    const itemMonth = getMonth(itemDate);

    if (!archivedMonths.includes(itemMonth)) {
      archivedMonths.push(itemMonth);
    }
  });

  return archivedMonths;
};

/**
 * Return an array of sorted string corresponding to a month.
 *
 * @param items
 *   Array of numbers corresponding to a month.
 */
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
