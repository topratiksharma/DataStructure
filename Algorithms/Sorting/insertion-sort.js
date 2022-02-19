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
   