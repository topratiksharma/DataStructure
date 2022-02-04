function findFirstNonRepeatingChar(sentence) {
  let listOfItems = {};
  const charArrayOfSentence = sentence.split("");
  charArrayOfSentence.forEach((eachChar) => {
    listOfItems[eachChar]
      ? (listOfItems[eachChar] += 1)
      : (listOfItems[eachChar] = 1);
  });

  for (const key in listOfItems) {
    if (Object.hasOwnProperty.call(listOfItems, key)) {
      const element = listOfItems[key];
      if (element == 1) {
        return key;
      }
    }
  }
  return "None found";
}

console.log(findFirstNonRepeatingChar("green apple"));

