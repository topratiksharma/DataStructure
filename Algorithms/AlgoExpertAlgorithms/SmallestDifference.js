function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let idxOne = 0;
  let idxTwo = 0;
  let smallest = Number.POSITIVE_INFINITY;
  let smallestPair = [];

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    const firstNum = arrayOne[idxOne];
    const secondNum = arrayTwo[idxTwo];
    let current = Math.abs(firstNum - secondNum);
    if (firstNum < secondNum) {
      idxOne++;
    } else if (secondNum < firstNum) {
      idxTwo++;
    } else {
      return [firstNum, secondNum];
    }
    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }
  return smallestPair;
}
