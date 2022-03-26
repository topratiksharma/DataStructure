function caesarCipherEncryptor(string, key) {
  // Write your code here.
  string = string.split("").map((ss) => {
    let code = ss.charCodeAt(0) + (key % 26);
    if (code > 122) {
      code -= 26;
    }
    return String.fromCharCode(code);
  });
  return string.join("");
}

// Do not edit the line below.
console.log(caesarCipherEncryptor("abc", 52));
// console.log(caesarCipherEncryptor("xyz", 2));
