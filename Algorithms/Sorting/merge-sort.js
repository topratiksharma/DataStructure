/**
 * In merge sort the array is divided into two parts and
 */

function sort(unSortedArray) {
  if (unSortedArray.length < 2) return;
  const middle = Math.floor(unSortedArray.length / 2);
  const left = [];
  const right = [];
  // Partitioning left and right
  for (let i = 0; i < middle; i++) {
    left.push(unSortedArray[i]);
  }
  for (let i = 0; i < unSortedArray.length - middle; i++) {
    right.push(unSortedArray[i + middle]);
  }
  sort(left);
  sort(right);
  return merge(left, right, unSortedArray);
}

function merge(left, right, result) {
  let i = 0; let j = 0; let k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result[k++] = left[i++];
    } else {
      result[k++] = right[j++];
    }
  }
  while (i < left.length) {
    result[k++] = left[i++];
  }
  while (j < right.length) {
    result[k++] = right[j++];
  }
  return result;
}
// inplace merge sort/
console.log(sort([2, 1, 5, 7, 3, 8, 6, 4]));
