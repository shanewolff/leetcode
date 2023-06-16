import { longestPalindrome } from './solution';

describe('test longest palindromic substring problem', () => {
  const testCases = [
    { input: 'babad', expectedOutput: 'bab' },
    { input: 'cbbd', expectedOutput: 'bb' },
    { input: 'a', expectedOutput: 'a' },
    { input: 'aacabdkacaa', expectedOutput: 'aca' },
  ];
  it('should identify the longest palindromic substring', () => {
    testCases.forEach((testCase) => {
      expect(longestPalindrome(testCase.input)).toEqual(
        testCase.expectedOutput
      );
    });
  });
});
