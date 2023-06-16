export const convert = (inputStr: string, numRows: number): string => {
  const lowerBound = 0;
  const upperBound = numRows - 1;
  const rows: string[] = [];
  for (let i = 0; i < numRows; ++i) {
    rows.push('');
  }

  let direction = 1;
  let row = 0;

  for (const char of inputStr) {
    rows[row] = rows.at(row) + char;
    row += direction;
    if (row <= lowerBound) {
      direction = 1;
      row = lowerBound;
    }
    if (row >= upperBound) {
      direction = -1;
      row = upperBound;
    }
  }

  return rows.join('');
};
