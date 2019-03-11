class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = head => {
  let prev = null;
  let current = head;
  while (current !== null) {
    const tmp = current.next;
    current.next = prev;
    prev = current;
    current = tmp;
  }
  return prev;
};

const reverseList1 = head => {
  if (head === null || head.next === null) {
    return head;
  }
  const node = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return node;
};

const node = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

console.log(reverseList(node));
