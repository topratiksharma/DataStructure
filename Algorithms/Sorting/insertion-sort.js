/**
 * Instead of sorting item we shift them to right
 */

function insertionSort(unSortedArray) {
  for (let i = 1; i < unSortedArray.length; i++) {
    let current = unSortedArray[i];
    let j = i - 1;

    while (j >= 0 && unSortedArray[j] > current) {
      unSortedArray[j + 1] = unSortedArray[j];
      j--;
    }
    unSortedArray[j + 1] = current;
  }
  return unSortedArray;
}

const unSortedArray = [7, 3, 1];
// const unSortedArray = [1, 2, 3, 4, 5, 6];
console.log(insertionSort(unSortedArray));

function insertionSort1(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      j--;
    }
  }
  return array;
}

function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(insertionSort1([7, 3, 1]));
