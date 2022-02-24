// O(n logn) Time | O(1) space
function sortedSquaredArray(array) {
  for (let i = 0; i < array.length; i++) { // O(n)
    array[i] = array[i] * array[i];
  }
  return array.sort((a, b) => a - b); //O(log n)
}

// O(n) Time | O(n) space
function SortedSquaredArray(array) {
  const output = [];
  let idx = 0;
  let left = 0;
  let right = array.length - 1;
  while (idx < array.length) {
    if (Math.abs(array[left]) > Math.abs(array[right])) {
      output.unshift(array[left] * array[left]);
      left++;
    } else {
      output.unshift(array[right] * array[right]);
      right--;
    }
    idx++;
  }
  return output;
}
