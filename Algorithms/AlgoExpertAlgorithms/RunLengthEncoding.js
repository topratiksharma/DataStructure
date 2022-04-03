function runLengthEncoding(string) {
  string = string.split("");
  let counter = 0;
  let newStr = "";
  let previous;
  while (string.length > 0) {
    currentChar = string.shift();
    if (!previous) previous = currentChar;
    if (previous === currentChar) {
      counter++;
    } else {
      newStr = getData(newStr, counter, previous);
      previous = currentChar;
      counter = 1;
    }
  }
  return getData(newStr, counter, previous);
}

function getData(newStr, counter, previous) {
  const reps = Math.floor(counter / 9);
  if (reps > 0) {
    newStr += new Array(reps).fill(9 + previous).join("");
  }
  return counter % 9 ? (newStr += (counter % 9) + previous) : newStr;
}

console.log(runLengthEncoding("........______=========AAAA   AAABBBB   BBB"));
