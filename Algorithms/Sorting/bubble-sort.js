function bubbleSort(unSortedArray) {
  let isSorted = false;
  for (let i = 0; i < unSortedArray.length; i++) {
    isSorted = true;
    isSorted;
    for (let j = 1; j < unSortedArray.length - i; j++) {
      if (unSortedArray[j] < unSortedArray[j - 1]) {
        swap(j, j - 1, unSortedArray);
        isSorted = false;
      }
    }
    if (isSorted) {
      return unSortedArray;
    }
  }
  return unSortedArray;
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const unSortedArray = [7, 3, 1, 4, 6, 2, 3];
// const unSortedArray = [1, 2, 3, 4, 5, 6];
console.log(bubbleSort(unSortedArray));
