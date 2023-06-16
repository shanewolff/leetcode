export const findMedianSortedArrays = (
  array1: number[],
  array2: number[]
): number => {
  const medianPosition = (array1.length + array2.length + 1) / 2;
  const lowerPosition = Math.floor(medianPosition);
  const upperPosition = Math.ceil(medianPosition);

  let index1 = 0;
  let index2 = 0;
  const values: number[] = [];

  while (values.length < upperPosition) {
    if (array1[index1] === undefined && array2[index2] === undefined) continue;
    if (array1[index1] === undefined && array2[index2] !== undefined) {
      values.push(array2[index2]);
      ++index2;
      continue;
    }
    if (
      (array1[index1] !== undefined && array2[index2] === undefined) ||
      array1[index1] <= array2[index2]
    ) {
      values.push(array1[index1]);
      ++index1;
      continue;
    }
    values.push(array2[index2]);
    ++index2;
  }

  return (values[lowerPosition - 1] + values[upperPosition - 1]) / 2;
};
