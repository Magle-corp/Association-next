/**
 * Returns a humanly understandable date.
 *
 * @param rawDate
 */
function dateFormatter(rawDate: string) {
  const year = rawDate.slice(0, 4);
  const month = rawDate.slice(5, 7);
  const day = rawDate.slice(8, 10);

  return `${day}-${month}-${year}`;
}

export { dateFormatter };
