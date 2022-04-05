function firstNonRepeatingCharacter(string) {
  // Write your code here
  string = string.split("");
  const stringsMap = createCharObject(string);
  string.forEach(c, (i) => {});
  return -1;
}

function createCharObject(currentString) {
  const mapOfStringChars = {};
  if (!currentString) return mapOfStringChars;
  currentString.forEach((s) => {
    mapOfStringChars[s] = mapOfStringChars[s] ? mapOfStringChars[s] + 1 : 1;
  });
  return mapOfStringChars;
}
