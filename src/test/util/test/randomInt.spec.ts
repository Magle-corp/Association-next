// Use.
import { randomInt } from '../randomInt';

/**
 * Test for util test randomInt
 */
describe('Test util randomInt', () => {
  test('Test that the return is >= than 0', () => {
    expect(randomInt(10)).toBeGreaterThanOrEqual(0);
  });

  test('Test that the return is =< than the maximum parameter', () => {
    expect(randomInt(10)).toBeLessThanOrEqual(10);
  });
});
