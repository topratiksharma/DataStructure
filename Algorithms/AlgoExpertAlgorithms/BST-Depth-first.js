function branchSums(root) {
  const sums = [];
  branchSum(root, 0, sums);
  
  return sums;
}

function branchSum(root, runningSum, sums) {
  if (!root) return;
  const newRunningSum = runningSum + root.value;

  if (!root.left && !root.right) {
    sums.push(newRunningSum);
    return;
  }
  branchSum(root.left, newRunningSum, sums);
  branchSum(root.right, newRunningSum, sums);
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
    right: {
      value: 5,
      left: { value: 10, left: null, right: null },
      right: null,
    },
  },
  right: {
    value: 3,
    left: { value: 6, left: null, right: null },
    right: { value: 7, left: null, right: null },
  },
};

console.log(branchSums(a));
