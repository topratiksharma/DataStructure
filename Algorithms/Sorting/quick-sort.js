function QuickSort(unSortedArray) {
  return sort(unSortedArray, 0, unSortedArray.length - 1);
}

function sort(unSortedArray, start, end) {
  if (start >= end) return;

  // Partition
  let boundary = partition(unSortedArray, start, end);
  // sort left
  sort(unSortedArray, start, boundary - 1);

  // sort right
  sort(unSortedArray, boundary + 1, end);
  return unSortedArray;
}

function partition(array, start, end) {
  var pivot = array[end];
  let boundary = start - 1;

  for (let i = start; i <= end; i++) {
    if (array[i] <= pivot) {
      swap(i, ++boundary, array);
    }
  }
  return boundary;
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const unSortedArray = [2, 1, 5, 7, 3, 8, 6, 4];
console.log(QuickSort(unSortedArray));
 