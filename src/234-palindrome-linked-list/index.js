// https://leetcode.com/problems/palindrome-linked-list/
// https://leetcode-cn.com/problems/palindrome-linked-list/

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
const isPalindrome = head => {
  let left = '';
  let right = '';
  while (head) {
    left += head.val;
    right = head.val + right;
    head = head.next;
  }
  return left === right;
};

console.log(isPalindrome({ val: 1, next: { val: 2, next: null } }));
console.log(
  isPalindrome({ val: 1, next: { val: 2, next: { val: 2, next: { val: 1, next: null } } } }),
);
