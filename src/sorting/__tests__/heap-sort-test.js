import { assert } from 'chai';
import heapSort from '../heap-sort';

describe('Heap Sort', () => {
  const testCases = [
    [],
    [1],
    [1, 2],
    [2, 1],
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [3, 2, 1],
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [1, 4, 3, 6, 9, 5, 5, 5, 4, 3, 6, 7, 8, 0],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
  ];

  testCases.forEach((testCase, index) => {
    it('should sort the nums using heap sort', () => {
      const nums = testCase.slice();
      heapSort(nums);
      const actual = nums;
      const expected = testCase.sort((a, b) => a - b);
      assert.deepEqual(actual, expected);
    });
  });
});