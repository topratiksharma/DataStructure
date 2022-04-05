function findClosestValueInBst(tree, target) {
  let currentNode = tree;
  let closest = tree.value;

  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closest;
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;

const currentNode = {
  value: 100,
  left: {
    value: 5,
    left: {
      value: 2,
      left: {
        value: 1,
        left: {
          value: -51,
          left: { value: -403, left: null, right: null },
          right: null,
        },
        right: {
          value: 1,
          left: null,
          right: {
            value: 1,
            left: null,
            right: {
              value: 1,
              left: null,
              right: { value: 1, left: null, right: null },
            },
          },
        },
      },
      right: { value: 3, left: null, right: null },
    },
    right: {
      value: 15,
      left: { value: 5, left: null, right: null },
      right: {
        value: 22,
        left: null,
        right: {
          value: 57,
          left: null,
          right: { value: 60, left: null, right: null },
        },
      },
    },
  },
  right: {
    value: 502,
    left: {
      value: 204,
      left: { value: 203, left: null, right: null },
      right: {
        value: 205,
        left: null,
        right: {
          value: 207,
          left: { value: 206, left: null, right: null },
          right: { value: 208, left: null, right: null },
        },
      },
    },
    right: {
      value: 55000,
      left: {
        value: 1001,
        left: null,
        right: { value: 4500, left: null, right: null },
      },
      right: null,
    },
  },
};

const target = -70;

console.log(findClosestValueInBst(currentNode, target));
