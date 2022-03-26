export class StringSearch {
  findVovels(string) {
    const vovels = ["A", "E", "O", "U", "I"];
    const charArray = string.split("");
    let count = 0;
    charArray.forEach((eachChar) => {
      if (vovels.includes(eachChar.toUpperCase())) {
        count++;
      }
    });
    return count;
  }

  reverseString(string) {
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
      reversed += string[i];
    }
    return reversed;
  }

  reverseWords(string) {
    const words = string.split(" ");
    let reversed = "";
    for (let i = words.length - 1; i >= 0; i--) {
      reversed += " " + words[i];
    }
    return reversed.trim();

    // or
    return words.reverse().join(" ");
  }

  // This detects if the string 2 is rotation of string 1.
  isRotation(string1, string2) {
    if (!(string1.length === string2.length)) {
      return false;
    }
    return (string1 + string1).includes(string2);
  }

  removeDuplicates(inputString) {
    const output = [];
    inputString.split("").forEach((eachChar) => {
      if (!output.includes(eachChar)) {
        output.push(eachChar);
      }
    });

    return output.join("");
  }

  capitalizeEachWord(inputString) {
    if (!inputString) return "";
    let output = "";
    inputString.trim();
    inputString.split(" ").forEach((eachWord) => {
      eachWord = eachWord.trim();
      output +=
        eachWord.slice(0, 1).toUpperCase() +
        eachWord.slice(1, eachWord.length).toLowerCase() +
        " ";
    });

    return output;
  }
}

const search = new StringSearch();

console.log(search.findVovels("Hello"));
console.log(search.reverseString("Hello"));
console.log(search.reverseWords("Hello World"));
console.log(search.isRotation("abcd", "cdab"));
console.log(search.removeDuplicates("helloooo world"));
console.log(search.capitalizeEachWord("  helloooo      world    "));
