// function sum(a, b) {
//   let limitOfIteration = a.length > b.length ? a.length - 1 : b.length - 1;
//   let isCarry = false;
//   let sum = "";
//   for (let i = limitOfIteration; i >= 0; i--) {
//     const first = parseInt(a[a.length - i], 10);
//     const second = parseInt(b[b.length - i], 10);
//     let cusum = (isNaN(first) ? 0 : first) + (isNaN(second) ? 0 : second);
//     cusum = isCarry ? cusum + 1 : cusum;
//     isCarry = cusum > 9;
//     if (isCarry) {
//       sum += cusum.toString().split("")[1];
//     }
//   }
//   return isCarry ? 1 + sum : sum;
// }
// // console.log(sum("5", "99"));
// console.log(sum("5", "89") === "94");
