import { ListNode } from './utils';

export const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  let currentL1 = l1;
  let currentL2 = l2;
  let carryForward = 0;
  const output = new ListNode();
  let currentOutput = output;

  do {
    const sum = (currentL1?.val ?? 0) + (currentL2?.val ?? 0) + carryForward;
    currentOutput.val = sum % 10;
    carryForward = Math.floor(sum / 10);

    if (!currentL1?.next && !currentL2?.next && !carryForward) break;

    currentL1 = currentL1?.next ?? null;
    currentL2 = currentL2?.next ?? null;
    currentOutput.next = new ListNode();
    currentOutput = currentOutput.next;
  } while (currentL1 || currentL2 || carryForward);

  return output;
};
