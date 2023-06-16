export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const convertArrayToNodeList = (array: number[]): ListNode => {
  const headNode = new ListNode(array.at(0));
  let previousNode = headNode;
  for (let i = 1; i < array.length; ++i) {
    previousNode.next = new ListNode(array.at(i));
    previousNode = previousNode.next;
  }
  return headNode;
};
