function mergeOverlappingIntervals(array) {
  array.sort((a, b) => a[0] - b[0]);
  const output = [];
  let i = 0;
  while (i < array.length) {
    if (output.length < 1 || !(output[output.length - 1][1] >= array[i][0])) {
      output.push(array[i]);
    } else {
      output[output.length - 1][1] = Math.max(output[output.length - 1][1],array[i][1]);
    }
    i++;
  }
  return output;
}

const intervals = [
  [-20, 30],
  [1, 22],
];

console.log(mergeOverlappingIntervals(intervals));
