// Use.
import { randomText } from '../randomText';

/**
 * Test for util test randomText.
 */
describe('Test util randomInt', () => {
  test('Test that the return is >= than 0', () => {
    const lorem = randomText(100);
    expect(lorem.length).toBeGreaterThanOrEqual(1);
  });

  test('Test that the return is not > than the maximum parameter', () => {
    const lorem = randomText(70);
    expect(lorem.length).toBeLessThanOrEqual(70);
  });

  test('Test with value 1', () => {
    const lorem = randomText(1);
    expect(lorem.length).toBeLessThanOrEqual(1);
  });

  test('Test with value 1000', () => {
    const lorem = randomText(1000);
    expect(lorem.length).toBeLessThanOrEqual(1000);
  });
});
