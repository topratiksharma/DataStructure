function moveElementToEnd(array, toMove) {
  let left = 0;
  let right = array.length - 1;
  while (left < right || left == right) {
    if (array[left] == toMove && array[right] == toMove) {
      right--;
    } else if (array[left] == toMove) {
      swap(array, left, right);
      right--;
      left++;
    } else if (array[left] !== toMove && array[right] !== toMove) {
      left++;
    }
  }
  return array;
}

function swap(array, fromIdx, withIdx) {
  const t = array[fromIdx];
  array[fromIdx] = array[withIdx];
  array[withIdx] = t;
}

const array = [2, 1, 2, 2, 2, 3, 4, 2];
//nst array = [4, 1, 2, 2, 2, 3, 2, 2];
//                   ^        ^
const toMove = 2;
console.log(moveElementToEnd(array, toMove));
