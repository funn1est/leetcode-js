const TreeNode = require('../TreeNode');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = root => {
  if (!root) {
    return 0;
  }
  const leftHeight = maxDepth(root.left);
  const rightHeight = maxDepth(root.right);
  return (leftHeight > rightHeight ? leftHeight : rightHeight) + 1;
};

console.log(
  maxDepth({
    val: 3,
    left: {
      val: 9,
      left: null,
      right: null,
    },
    right: {
      val: 20,
      left: 15,
      right: 7,
    },
  }),
);
