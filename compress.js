/*
Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.
Ex.
compress('aaa') -> '3a'
compress('cc') -> '2c'
compress('t') -> 't'
You can assume that the input only contains alphabetic characters.
*/

const compress = (s) => {
  // declare empty array to push values into
  let result = [];
  // initialize 2 pointers
  let i = 0;
  let j = 0;
  // while loop to check input length
  while (j <= s.length) {
    // if value at j is the same as the starting i value, increment j
    if (s[i] === s[j]) {
      ++j;
    } else {
      // if value at j is different, count length
      const count = j - i;
      // if length > 1, add number and letter to result
      if (count === 1) {
        result.push(s[i]);
      } else {
        result.push(String(count), s[i]);
      }
      // reset pointers
      i = j;
    }
  }
  return result.join('');
};

console.log(compress('ccaaatsss')); // -> '2c3at3s'
