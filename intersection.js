/*
Write a function, intersection, that takes in two arrays, a,b, as arguments. 
The function should return a new array containing elements that are in both of the two arrays.

You may assume that each input array does not contain duplicate elements.
*/

const intersection = (a, b) => {
  // declare output arr to push vals into
  const output = [];
  // create set from first arr
  const set = new Set(a);
  // set lookup is constant time
  // iterate over second arr
  for (let i = 0; i < b.length; i++) {
    // if set has val, push into output arr
    if (set.has(b[i])) {
      output.push(b[i]);
    }
  }
  return output;
};

console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10])); // -> [2,6]
