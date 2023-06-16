import { addTwoNumbers } from './solution';
import { convertArrayToNodeList } from './utils';

describe('test add two numbers problem', () => {
  const testCases = [
    { input: { l1: [2, 4, 3], l2: [5, 6, 4] }, expectedOutput: [7, 0, 8] },
    { input: { l1: [0], l2: [0] }, expectedOutput: [0] },
    {
      input: { l1: [9, 9, 9, 9, 9, 9, 9], l2: [9, 9, 9, 9] },
      expectedOutput: [8, 9, 9, 9, 0, 0, 0, 1],
    },
  ];
  it('should correctly add the two numbers and represented in a list of nodes', () => {
    testCases.forEach((testCase) => {
      expect(
        addTwoNumbers(
          convertArrayToNodeList(testCase.input.l1),
          convertArrayToNodeList(testCase.input.l2)
        )
      ).toEqual(convertArrayToNodeList(testCase.expectedOutput));
    });
  });
});

describe('test convertArrayToNodeList function', () => {
  it('should have all the nodes with correct values', () => {
    const headNode = convertArrayToNodeList([1, 2, 3, 4]);
    expect(headNode.val).toEqual(1);
    expect(headNode.next?.val).toEqual(2);
    expect(headNode.next?.next?.val).toEqual(3);
    expect(headNode.next?.next?.next?.val).toEqual(4);
    expect(headNode.next?.next?.next?.next).toEqual(null);
  });
});
