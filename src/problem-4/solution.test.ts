import { findMedianSortedArrays } from './solution';

describe('test median of two sorted arrays problem', () => {
  const testCases = [
    { input: { array1: [1, 3], array2: [2] }, expectedOutput: 2 },
    {
      input: {
        array1: [1, 2],
        array2: [3, 4],
      },
      expectedOutput: 2.5,
    },
  ];
  it('should identify the correct median of the two arrays concatenated together', () => {
    testCases.forEach((testCase) => {
      expect(
        findMedianSortedArrays(testCase.input.array1, testCase.input.array2)
      ).toEqual(testCase.expectedOutput);
    });
  });
});
