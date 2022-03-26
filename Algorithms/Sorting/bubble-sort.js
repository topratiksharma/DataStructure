function bubbleSort(unSortedArray) {
  let isSorted = false;
  for (let i = 0; i < unSortedArray.length; i++) {
    isSorted = true;
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

function bubbleSort2(unSortedArray) {
  for (let i = 0; i < unSortedArray.length; i++) {
    for (let j = 0; j < i; j++) {
      if (unSortedArray[i] < unSortedArray[j]) {
        swap(i, j, unSortedArray);
      }
    }
  }
  return unSortedArray;
}

function bubbleSort3(unSortedArray) {
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < unSortedArray.length - 1 - counter; i++) {
      if (unSortedArray[i] > unSortedArray[i + 1]) {
        swap(i, i + 1, unSortedArray);
        isSorted = false;
      }
    }
    counter += 1;
  }

  return unSortedArray;
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(bubbleSort([7, 3, 1, 4, 6, 2, 3]));
console.log(bubbleSort2([7, 3, 1, 4, 6, 2, 3]));
console.log(bubbleSort3([7, 3, 1, 4, 6, 2, 3]));
