function ThreeNumbersSum(array) {
  const result = [];
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        let first = array[i];
        let second = array[j];
        let third = array[k];
        if (first + second + third === 0) {
          result.push([first, second, third]);
        }
      }
    }
  }
  return result;
}

function ThreeNumbersSum2(array, target) {
  const result = [];
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];
      if (currentSum === target) {
        result.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
}
console.log(ThreeNumbersSum2([12, 3, 1, 2, -6, 5, -8, 6], 0));
console.log(ThreeNumbersSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
