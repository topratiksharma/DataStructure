function firstDuplicateValue(array) {
  let obj = {};
  let value = -1;
  array.every((s) => {
    if (!obj[s]) {
      obj[s] = 1;
      return true;
    } else {
      value = s;
      return false;
    }
  });
  return value;
}

function firstDuplicateValue1(array) {
  const seen = new Set();
  for (const va of array) {
    if (seen.has(va)) return va;
    seen.add(va);
  }
  return -1;
}

function firstDuplicateValue2(array) {
  let i = 0;
  while (i < array.length) {
    let news = array[i];
    const abs = Math.abs(news);
    if (Math.sign(array[abs - 1]) > 0) {
      array[abs - 1] *= -1;
    } else {
      return Math.abs(news);
    }
    i++;
  }
  return -1;
}

const array = [2, 1, 1];

console.log(firstDuplicateValue2(array));
