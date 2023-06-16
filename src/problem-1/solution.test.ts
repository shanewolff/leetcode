import { twoSum } from './solution';

describe('test two sum problem', () => {
  const testCases = [
    { input: { nums: [2, 7, 11, 15], target: 9 }, expectedOutput: [0, 1] },
    { input: { nums: [3, 2, 4], target: 6 }, expectedOutput: [1, 2] },
    { input: { nums: [3, 3], target: 6 }, expectedOutput: [0, 1] },
  ];
  it('should output the correct indexes which ad up to the target', () => {
    testCases.forEach((testCase) => {
      expect(twoSum(testCase.input.nums, testCase.input.target)).toEqual(
        testCase.expectedOutput
      );
    });
  });
});
