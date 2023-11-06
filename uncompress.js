/*
Write a function, uncompress, that takes in a string as an argument. 
The input string will be formatted into multiple groups according to the following pattern:
<number><char>
for example, '2c' or '3a'
The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.
*/

const uncompress = (s) => {
  // need to break down string into letter and number pair
  // declare array to push values into
  let result = [];
  // declare a variable numbers to check is value is a number
  const numbers = '0123456789';
  // initialize 2 pointers
  let i = 0;
  let j = 0;
  // while loop to check input length
  while (j < s.length) {
    // if value at j is a number, increment j
    if (numbers.includes(s[j])) {
      ++j;
    } else {
      // if j is not a number, slice to get pair of number and letter
      const num = Number(s.slice(i, j));
      // increase count
      for (let count = 0; count < num; ++count) {
        // push letter into result until count has been completed
        result.push(s[j]);
      }
      // reset pointers
      ++j;
      i = j;
    }
  }
  return result.join('');
};

console.log(uncompress('2c3a1t')); // -> 'ccaaat'
