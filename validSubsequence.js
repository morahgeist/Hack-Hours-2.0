/* Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4] , and so do the numbers [2, 4]. Note that a single number in an array and the array itself are both valid subsequences of the array.
*/

function isValidSubsequence(array, sequence) {
  //   // use a cache with index as values, then can check that vals are ascending
  //   const cache = {};
  //   const seqCache = {};
  //   // iterate over input arr and cache all vals with index as key
  //   for (let i = 0; i < array.length; i++) {
  //     if (!cache[array[i]]) {
  //       cache[array[i]] = i;
  //     }
  //   }
  //   // iterate over input sequence and check to make sure arr contains each el of sequence
  //   for (let i = 0; i < sequence.length; i++) {
  //     // if arr does not contain seq el, return false
  //     if (
  //       array.includes(sequence[i]) === false ||
  //       cache[sequence[i]] > cache[sequence[i + 1]]
  //     )
  //       return false;
  //   }
  //   return true;

  // iterate over arr
  // need 2 pointers, current val in seq and then moving through arr
  // i will iterate over array
  // j will iterate over sequence
  let i = 0;
  let j = 0;
  while (j < sequence.length) {
    if (!array.includes(sequence[j])) return false;
  }
  // if el is found, next iteration is from that index to the end
  // check if val is in seq
}

const arr = [5, 1, 22, 25, 6, -1, 8, 10];
const seq1 = [1, 6, -1, 10]; // true
const seq2 = [1, -1, 6, 10]; // false
console.log(isValidSubsequence(arr, seq1));
console.log(isValidSubsequence(arr, seq2));
