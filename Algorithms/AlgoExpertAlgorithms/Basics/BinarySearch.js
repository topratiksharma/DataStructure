function BinarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (left !== right) {
    if (array[middle] == target) return middle;
    if (array[middle] > target) { right = middle - 1; }
    else { left = middle + 1; }
    middle = Math.floor((left + right) / 2);
  }

  return array[middle] === target ? middle : -1;
}

const a = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
console.log(BinarySearch(a, 85));
