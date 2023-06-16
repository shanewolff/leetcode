import { lengthOfLongestSubstring } from './solution';

describe('test the longest substring without repeating characters problem', () => {
  const testCases = [
    { input: 'abcabcbb', expectedOutput: 3 },
    { input: 'bbbbb', expectedOutput: 1 },
    { input: 'pwwkew', expectedOutput: 3 },
  ];
  it('should correctly find the length of the longest substring', () => {
    testCases.forEach((testCase) => {
      expect(lengthOfLongestSubstring(testCase.input)).toEqual(
        testCase.expectedOutput
      );
    });
  });
});
