// https://leetcode.com/problems/add-two-numbers/
// https://leetcode-cn.com/problems/add-two-numbers/

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
const addTwoNumbers = (l1, l2) => {
  const list = new ListNode();
  let copy = list;
  let remainder = 0;
  while (l1 || l2 || remainder !== 0) {
    const sum = remainder + (l1 === null ? 0 : l1.val) + (l2 === null ? 0 : l2.val);
    remainder = sum >= 10 ? 1 : 0;
    copy.next = new ListNode(sum % 10);
    copy = copy.next;
    l1 = l1 === null ? null : l1.next;
    l2 = l2 === null ? null : l2.next;
  }
  return list.next;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers1 = (l1, l2) => {
  const helper = (node1, node2, carry = 0) => {
    if (node1 === null && node2 === null && carry === 0) {
      return null;
    }
    const sum = carry + (node1 === null ? 0 : node1.val) + (node2 === null ? 0 : node2.val);
    const node = new ListNode(sum % 10);
    node.next = helper(
      node1 === null ? null : node1.next,
      node2 === null ? null : node2.next,
      Math.floor(sum / 10),
    );
    return node;
  };

  return helper(l1, l2);
};

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(l1, l2));
console.log(addTwoNumbers1(l1, l2));
