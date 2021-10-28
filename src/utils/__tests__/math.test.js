import { sum } from '../math';

test('Sum function adds two number correctly', () => {
  // step 1: arrange / setup

  // step 2: act
  const result = sum(1, 2);

  // step 3: assert
  expect(result).toBe(3);
});
