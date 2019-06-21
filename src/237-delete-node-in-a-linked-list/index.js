// https://leetcode.com/problems/delete-node-in-a-linked-list/
// https://leetcode-cn.com/problems/delete-node-in-a-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = node => {
  node.val = node.next.val;
  node.next = node.next.next;
};

const node1 = { val: 4, next: { val: 5, next: { val: 1, next: { val: 9, next: null } } } };
const node2 = { val: 4, next: { val: 5, next: { val: 1, next: { val: 9, next: null } } } };

deleteNode(node1.next);
console.log(node1);

deleteNode(node2.next.next);
console.log(node2);
