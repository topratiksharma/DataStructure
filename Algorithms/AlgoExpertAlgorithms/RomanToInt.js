function RomanToInteger(a) {
  let s = a.split("");
  let total = 0;
  let previous = "";
  while (s.length > 0) {
    const d = s.pop();
    previous;
    let value = getValue(d, previous);
    value;
    previous = d;
    total += value;
  }
  return total;
}

function getValue(s, p) {
  let value = 0;
  switch (s) {
    case "I":
      value = 1;
      if (p === "X" || p === "V") {
        value *= -1;
      }
      break;
    case "V":
      value = 5;
      break;
    case "X":
      value = 10;
      if (p === "L" || p === "C") {
        value *= -1;
      }
      break;
    case "L":
      value = 50;
      break;
    case "C":
      value = 100;
      if (p === "D" || p === "M") {
        value *= -1;
      }
      break;
    case "D":
      value = 500;
      break;
    case "M":
      value = 1000;
      break;
    default:
      break;
  }
  return value;
}

// console.log(RomanToInteger("MCMXCIV"));

function IntegerToRoman(a) {
  console.log(a.toString()[a.toString().length - 1]);
  s = a.toString().split("");
  let total = 0;
  let previous = "";
  let pointer = 1;
  while (s.length > 0) {
    const d = s.pop();
    let value = getIntegerValue(d, pointer);
    value;
    previous = d;
    total += value;
  }
  return total;
}

console.log(IntegerToRoman(3));

function getIntegerValue(x, pointer) {
  pointer;
  if (x <= 3 && pointer === 1) {
    return new Array(x).fill("I", 0, 2);
  }
}
