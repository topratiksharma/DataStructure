function runLengthEncoding(string) {
  // Write your code here.
  string = string.split("");
  let counter = 0;
  let newStr = "";
  let previous;

  while (string.length > 0) {
    currentChar = string.shift();
    if (!previous) previous = currentChar;
    if (previous == currentChar) {
      counter++;
    } else {
      if (counter > 9) {
        console.log(counter % 9);
        console.log(Math.floor(counter / 9));
        for (let i = 0; i < Math.floor(counter / 9); i++) {
            
        }
      } else {
        newStr += counter + previous;
      }
      previous = currentChar;
      counter = 1;
    }
  }
  newStr += counter + previous;
  return newStr;
}

console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"));
