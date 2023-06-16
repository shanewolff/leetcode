const isPalindrome = (inputStr: string): boolean => {
  const iterations = Math.floor(inputStr.length / 2);
  for (let i = 0; i < iterations; ++i) {
    if (inputStr.charAt(i) !== inputStr.charAt(inputStr.length - 1 - i))
      return false;
  }
  return true;
};

export const longestPalindrome = (inputStr: string): string => {
  let longestPalindrome = '';
  let index = 0;
  while (
    index < inputStr.length &&
    longestPalindrome.length < inputStr.length - (index + 1)
  ) {
    let nextOccurence = index;
    while (nextOccurence !== -1) {
      nextOccurence = inputStr.indexOf(
        inputStr.charAt(index),
        nextOccurence + 1
      );
      const subStr = inputStr.substring(index, nextOccurence + 1);
      if (isPalindrome(subStr) && subStr.length > longestPalindrome.length)
        longestPalindrome = subStr;
    }
    index += 1;
  }
  return longestPalindrome.length === 0
    ? inputStr.charAt(0)
    : longestPalindrome;
};
