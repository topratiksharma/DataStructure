function ThreeLargest(array) {
  const threeLargest = [null, null, null];
  array.forEach((a) => {
    updateLargest(threeLargest, a);
  });

  return threeLargest;
}

function updateLargest(threeLargest, num) {
  if (!threeLargest[2] || num > threeLargest[2]) {
    shiftAndUpdate(threeLargest, num, 2);
  } else if (!threeLargest[1] || num > threeLargest[1]) {
    shiftAndUpdate(threeLargest, num, 1);
  } else if (!threeLargest[0] || num > threeLargest[0]) {
    shiftAndUpdate(threeLargest, num, 0);
  }
}

function shiftAndUpdate(arr, num, idx) {
  for (let i = 0; i < idx + 1; i++) {
    if (i == idx) {
      arr[i] = num;
    } else {
      arr[i] = arr[i + 1];
    }
  }
}

const array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7];

console.log(ThreeLargest(array));
