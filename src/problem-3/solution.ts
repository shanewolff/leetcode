export const lengthOfLongestSubstring = (inputStr: string): number => {
  let maxLengthFound = 0;
  for (let i = 0; i < inputStr.length; ++i) {
    const subStr: string[] = [];
    for (let j = i; j < inputStr.length; ++j) {
      if (subStr.includes(inputStr.charAt(j))) break;
      subStr.push(inputStr.charAt(j));
    }
    if (subStr.length > maxLengthFound) maxLengthFound = subStr.length;
    if (maxLengthFound >= inputStr.length - (i + 1)) break;
  }
  return maxLengthFound;
};
