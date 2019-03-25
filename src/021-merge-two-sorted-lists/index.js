const ListNode = require('../ListNode');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  const tmp = new ListNode(null);
  let node = tmp;
  while (l1 || l2) {
    if ((l1 && l2 && l1.val <= l2.val) || (l1 && !l2)) {
      node.next = new ListNode(l1.val);
      node = node.next;
      l1 = l1.next;
    } else {
      node.next = new ListNode(l2.val);
      node = node.next;
      l2 = l2.next;
    }
  }
  return tmp.next;
};

console.log(
  mergeTwoLists(
    { val: 1, next: { val: 2, next: { val: 4, next: null } } },
    { val: 1, next: { val: 3, next: { val: 4, next: null } } },
  ),
);
