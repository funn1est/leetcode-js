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
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const rangeSumBST = (root, L, R) => {
  if (root) {
    if (root.val < L) {
      return rangeSumBST(root.right, L, R);
    }
    if (root.val > R) {
      return rangeSumBST(root.left, L, R);
    }

    return root.val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
  }
  return 0;
};

const root = new TreeNode(
  10,
  new TreeNode(5, new TreeNode(3), new TreeNode(7)),
  new TreeNode(15, null, new TreeNode(18)),
);

console.log(rangeSumBST(root, 7, 15));
