function findFirstRepeatingChar(sentence) {
  const charArrayOfSentence = sentence.split("");
  while (charArrayOfSentence.length > 0) {
    const char = charArrayOfSentence.shift();
    if (charArrayOfSentence.includes(char)) {
      return char;
    }
  }
  return "None found";
}

console.log(findFirstRepeatingChar("green apple"));
