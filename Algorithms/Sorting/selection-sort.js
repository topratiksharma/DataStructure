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

function selectionSort2(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    swap(i, min, array);
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// console.log(selectionSort([7, 3, 1, 4, 6, 2, 3]));
console.log(selectionSort2([8, 5, 9, 5, 6, 3, 2]));
