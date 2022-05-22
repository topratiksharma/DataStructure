function arrayOfProducts(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    let value = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        value *= array[j];
      }
    }
    newArray[i] = value;
  }
  return newArray;
}

function arrayOfProducts2(array) {
  const reduced = array.reduce((a, b) => (a === 0 ? b : a * b));
  array.map((element) => (reduced / element) | 0);
  array;
}

function arrayOfProducts3(array) {
  const leftArr = new Array(array.length).fill(1);
  const rigthArr = new Array(array.length).fill(1);

  let product = 1;
  for (let i = 0; i < array.length; i++) {
    leftArr[i] = product;
    product *= array[i];
  }
  product = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    rigthArr[i] = product;
    product *= array[i];
  }
  for (let i = 0; i < array.length; i++) {
    array[i] = rigthArr[i] * leftArr[i];
  }
  return array;
}

function arrayOfProducts4(array) {
  const products = new Array(array.length).fill(1);

  let product = 1;
  for (let i = 0; i < products.length; i++) {
    products[i] = product;
    product *= array[i];
  }
  product = 1;
  for (let i = products.length - 1; i >= 0; i--) {
    products[i] *= product;
    product *= array[i];
  }

  return products;
}

console.log(arrayOfProducts4([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
