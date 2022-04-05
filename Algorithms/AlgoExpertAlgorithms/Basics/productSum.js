function productSum(array) {
  return test(array);
}

function test(array, sum = 0, multiplier = 1) {
  array.forEach((element) => {
    if (Array.isArray(element)) {
      sum += test(element, 0, multiplier + 1);
    } else {
      sum += element;
    }
  });
  return sum * multiplier;
}

function flattenTheArray(array) {
  let stack = array;
  const flatten = [];
  while (stack.length) {
    let a = stack.pop();
    if (Array.isArray(a)) {
      stack = [...stack, ...a];
    } else {
      flatten.push(a);
    }
  }
  return flatten.reverse();
}
const a = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

// console.log(productSum(a));
console.log(flattenTheArray(a));
