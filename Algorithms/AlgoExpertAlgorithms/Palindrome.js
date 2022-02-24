function isPalindrome(x) {
  if (x < 0) return false;
  const splitted = x.toString().split("");
  let top = 0;
  let bottom = splitted.length - 1;
  while (top <= bottom) {
    if (top === bottom) {
      return true;
    } else if (splitted[top++] !== splitted[bottom--]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(11));

