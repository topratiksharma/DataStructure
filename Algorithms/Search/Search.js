class Search {
  linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
      if (item == array[i]) {
        console.log(i);
        return i;
      }
    }
    return -1;
  }

  //#region Binary Search
  binarySearchRec(array, target, left, right) {
    if (right < left) return -1;

    const middle = Math.floor((left + right) / 2);

    if (array[middle] === target) {
      return middle;
    }

    if (target < array[middle]) {
      return this.binarySearchRec(array, target, left, middle - 1);
    } else {
      return this.binarySearchRec(array, target, middle + 1, right);
    }
  }

  binarySearch(array, target) {
    array = array.sort((a, b) => a - b);
    return this.binarySearchRec(array, target, 0, array.length - 1);
  }

  binarySearchIterative(array, target) {
    array = array.sort((a, b) => a - b);
    array;
    let left = 0;
    var right = array.length - 1;

    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      if (array[middle] == target) {
        return middle;
      }

      if (target < array[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
    return -1;
  }
  //#endregion

  //#region Ternery Search
  ternarySearch(array, target) {
    array = array.sort((a, b) => a - b);
    return this.ternerySearchImplementaion(array, target, 0, array.length - 1);
  }

  ternerySearchImplementaion(array, target, left, right) {
    if (left > right) return;

    const partionSize = Math.floor((right - left) / 3);
    const mid1 = left + partionSize;
    const mid2 = right - partionSize;
    if (array[mid1] === target) {
      return mid1;
    }
    if (array[mid2] === target) {
      return mid2;
    }

    if (target < array[mid1]) {
      return this.ternerySearchImplementaion(array, target, left, mid1 - 1);
    } else if (target > array[mid2]) {
      return this.ternerySearchImplementaion(array, target, mid2 + 1, right);
    } else {
      return this.ternerySearchImplementaion(array, target, mid1 + 1, mid2 - 1);
    }
  }
  //#endregion

  //#region JumpSearch

  //#endregion

  //#region Exponential Search
  exponentialSearch(array, target) {
    array;
    let bound = 1;

    while (bound < array.length && array[bound] < target) {
      bound *= 2;
    }
    
    let left = bound / 2;
    let right = Math.min(bound, array.length - 1);

    return this.binarySearchRec(array, target, left, right);
  }
  //#endregion
}

const search = new Search();

const items = [5, 3, 7, 2, 69, 7];

console.log(search.linearSearch(items, 5));

console.log(search.binarySearch(items, 5));

console.log(search.binarySearchIterative(items, 5));

console.log(search.ternarySearch(items, 5));

console.log(search.exponentialSearch(items, 69));
