// https://leetcode.com/problems/symmetric-tree/
// https://leetcode-cn.com/problems/symmetric-tree/

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = root => {
  if (root === null) {
    return true;
  }

  const isMirror = (node1, node2) => {
    if (node1 === null && node2 === null) {
      return true;
    }
    if (node1 === null || node2 === null || node1.val !== node2.val) {
      return false;
    }
    return isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
  };

  return isMirror(root.left, root.right);
};

// const isSymmetric = root => {
//   if (root === null) {
//     return true;
//   }
//
//   const stack = [];
//   stack.push(root.left, root.right);
//
//   while (stack.length) {
//     const node1 = stack.shift();
//     const node2 = stack.shift();
//     if (!(node1 === null && node2 === null)) {
//       if (node1 === null || node2 === null || node1.val !== node2.val) {
//         return false;
//       }
//       stack.push(node1.left, node2.right);
//       stack.push(node1.right, node2.left);
//     }
//   }
//   return true;
// };

console.log(
  isSymmetric({
    val: 1,
    left: {
      val: 2,
      left: { val: 3, left: null, right: null },
      right: { val: 4, left: null, right: null },
    },
    right: {
      val: 2,
      left: { val: 4, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
  }),
);

console.log(
  isSymmetric({
    val: 1,
    left: { val: 2, left: null, right: { val: 3, left: null, right: null } },
    right: { val: 2, left: null, right: { val: 3, left: null, right: null } },
  }),
);
