// Use.
const Faker = require('faker');

/**
 * Returns a random text.
 *
 * @param maxLength
 *   The maximum length expected value, number.
 */
const randomText = (maxLength: number) => {
  const lorem: string = Faker.lorem.text();
  return lorem.length > maxLength
    ? lorem.slice(0, maxLength)
    : lorem.slice(0, lorem.length);
};

export { randomText };
