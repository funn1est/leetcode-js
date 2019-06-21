// https://leetcode.com/problems/linked-list-cycle/
// https://leetcode-cn.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = head => {
  const visited = [];
  while (head) {
    if (visited.includes(head)) {
      return true;
    }
    visited.push(head);
    head = head.next;
  }
  return false;
};

const node1 = { val: 3, next: null };
const node11 = { val: 2, next: null };
const node111 = { val: 0, next: null };
const node1111 = { val: -4, next: null };
node1.next = node11;
node11.next = node111;
node111.next = node1111;
node1111.next = node11;

console.log(hasCycle(node1));
