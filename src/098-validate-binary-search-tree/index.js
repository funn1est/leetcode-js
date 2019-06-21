// https://leetcode.com/problems/validate-binary-search-tree/
// https://leetcode-cn.com/problems/validate-binary-search-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = root => {
  if (!root) {
    return true;
  }

  const helper = (node, min, max) => {
    if (node.val <= min) {
      return false;
    }
    if (node.val >= max) {
      return false;
    }
    const left = node.left ? helper(node.left, min, node.val) : true;
    if (left) {
      const right = node.right ? helper(node.right, node.val, max) : true;
      return right;
    }
    return false;
  };
  return helper(root, -Infinity, Infinity);
};

console.log(isValidBST({ val: 2, left: 1, right: 3 }));
console.log(isValidBST({ val: 5, left: 1, right: { val: 4, left: 3, right: 6 } }));
