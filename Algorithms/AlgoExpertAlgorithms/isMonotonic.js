function isMonotonic(array) {
  let isMo = true;
  let isForward = array[0] > array[array.length - 1];
  isForward;
  for (let i = 1; i <= array.length - 1; i++) {
    if (isValid(array, i, isForward) && isMo) {
    } else {
      isMo = false;
    }
  }
  isMo
  return isMo;
}

function isValid(array, i, isForward) {
  return isForward ? array[i] <= array[i - 1] : array[i] >= array[i - 1];
}
console.log(isMonotonic([1, 2, 5, 7, 9, 11, 5]));


// Figure out purpose presentation 
//  