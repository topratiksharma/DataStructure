/**
 * In Each pass we find the minimum value and move it to the top or right place *
 *
 * We devide array into sorted and unsorted part.
 *
 */

function selectionSort(unSortedArray) {
  for (let i = 0; i < unSortedArray.length; i++) {
    let minIndex = i;
    for (let j = i; j < unSortedArray.length; j++) {
      if (unSortedArray[j] < unSortedArray[minIndex]) {
        minIndex = j;
      }
    }
    swap(i, minIndex, unSortedArray);
  }
  return unSortedArray;
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// const unSortedArray = [7, 3, 1, 4, 6, 2, 3];
const unSortedArray = [1, 2, 3, 4, 5, 6];
console.log(selectionSort(unSortedArray));
