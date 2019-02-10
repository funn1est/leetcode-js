class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = nums => {
  const len = nums.length;
  if (len) {
    const maxIndex = nums.indexOf(Math.max(...nums));
    const root = new TreeNode(nums[maxIndex]);
    root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
    root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1, len));
    return root;
  }
  return null;
};

console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));
