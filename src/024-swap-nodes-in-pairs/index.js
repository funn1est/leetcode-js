// https://leetcode.com/problems/swap-nodes-in-pairs/
// https://leetcode-cn.com/problems/swap-nodes-in-pairs/

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
 * @return {ListNode}
 */
const swapPairs = head => {
  if (head === null || head.next === null) {
    return head;
  }

  const node = head.next;
  head.next = swapPairs(head.next.next);
  node.next = head;

  return node;
};

const node1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
const node2 = new ListNode(1);

console.log(swapPairs(node1));
console.log(swapPairs(node2));
