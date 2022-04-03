function generateDocument(characters, document) {
  const documentMap = createCharObject(document);
  const charactersMap = createCharObject(characters);
  let isAbsent = false;
  for (let key in documentMap) {
    if (
      !charactersMap[key] ||
      (documentMap[key] > charactersMap[key] &&
      !isAbsent)
    ) {
      isAbsent = true;
    }
  }
  return !isAbsent;
}

function createCharObject(currentString) {
  const mapOfStringChars = {};
  if (!currentString) return mapOfStringChars;
  currentString.split("").forEach((s) => {
    mapOfStringChars[s] = mapOfStringChars[s] ? mapOfStringChars[s] + 1 : 1;
  });
  return mapOfStringChars;
}

const characters = "Bste!hetsi ogEAxpelrt x ";
const document = "AlgoExpert is the Best!";
const characters1 = "A";
const document1 = "a";
console.log(generateDocument(characters1, document1));
