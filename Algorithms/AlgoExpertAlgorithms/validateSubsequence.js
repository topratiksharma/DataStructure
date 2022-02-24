// O(n) Time | O(1) Space
function validSubSequence(array, sequence) {
  let arrIdx = 0; let seqIdx = 0;
  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
    arrIdx++;
  }
  return seqIdx === sequence.length;
}

function ValidSubSequence()
let a = [1, 1, 1, 1, 1];
let s = [1, 1, 1];

console.log(validSubSequence([5, 1, 22, 25, 6, -1, 10, 8], [1, 6, -1, 10]));
console.log(validSubSequence(a, s));
