const ListNode = require('../ListNode');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  const dumy = new ListNode();
  dumy.next = head;
  let n1 = dumy;
  let n2 = dumy;
  for (let i = 0; i < n + 1; i += 1) {
    n1 = n1.next;
  }
  while (n1 !== null) {
    n1 = n1.next;
    n2 = n2.next;
  }
  n2.next = n2.next.next;
  return dumy.next;
};

console.log(
  removeNthFromEnd(
    { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } },
    2,
  ),
);
