import { convert } from './solution';

describe('test longest palindromic substring problem', () => {
  const testCases = [
    {
      input: { inputStr: 'PAYPALISHIRING', numRows: 3 },
      expectedOutput: 'PAHNAPLSIIGYIR',
    },
    {
      input: { inputStr: 'PAYPALISHIRING', numRows: 4 },
      expectedOutput: 'PINALSIGYAHRPI',
    },
    { input: { inputStr: 'A', numRows: 1 }, expectedOutput: 'A' },
    { input: { inputStr: 'AB', numRows: 1 }, expectedOutput: 'AB' },
  ];

  it('should identify the longest palindromic substring', () => {
    testCases.forEach((testCase) => {
      expect(convert(testCase.input.inputStr, testCase.input.numRows)).toEqual(
        testCase.expectedOutput
      );
    });
  });
});
