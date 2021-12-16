/**
 * Returns a random integer.
 *
 * @param number
 *   The maximum expected value.
 */
const randomInt = (number: number) => {
  return Math.floor(Math.random() * number);
};

export { randomInt };
