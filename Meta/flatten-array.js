/*
 * 1. In JavaScript, write a function that takes an array as
 * input that can contain both ints and more arrays
 * (which can also contain an array or int) and return the flattened array.
 * ex. [1, [2, [ [3, 4], 5], 6]] => [1, 2, 3, 4, 5, 6]
 */

function flattenArray(array) {
  const flattenArray = [];
  while (array.length) {
    const a = array.pop();
    if (Array.isArray(a)) {
      array = [...array, ...a];
    } else {
      flattenArray.unshift(a);
    }
  }
  return flattenArray;
}

console.log(flattenArray([1, [2, [[3, 4], 5], 6]]));
