function nodeDepths(root) {
  let sum = [];
  getDepth(root, 0, sum);
  return sum.reduce((a, b) => a + b);
}

function getDepth(node, currentDepth, sum) {
  if (!node) return;
  sum.push(currentDepth);
  currentDepth++;
  getDepth(node.left, currentDepth, sum);
  getDepth(node.right, currentDepth, sum);
}

const a = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: { value: 8, left: null, right: null },
      right: { value: 9, left: null, right: null },
    },
    right: { value: 5, left: null, right: null },
  },
  right: {
    value: 3,
    left: { value: 6, left: null, right: null },
    right: { value: 7, left: null, right: null },
  },
};

console.log(nodeDepths(a));

function nodeDepths2(root, depth = 0) {
  if (root === null) return 0;
  return (
    depth +
    nodeDepths2(root.left, depth + 1) +
    nodeDepths2(root.right, depth + 1)
  );
}
console.log(nodeDepths2(a));

function nodeDepths3(root, depth = 0) {
  if (root === null) return 0;
  return (
    depth +
    nodeDepths2(root.left, depth + 1) +
    nodeDepths2(root.right, depth + 1)
  );
}

console.log(nodeDepths3(a));
