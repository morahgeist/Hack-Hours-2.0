/*
Write a function called commonElements that takes in any number of arrays in the 
argument. The arrays may contain both numbers and strings. It should return a new array
with all the common elements (both numbers and/or strings) from the given input. 
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.


ex: 
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

commonElements(arr1, arr2, arr3) -> [2, 3, 2000, 'dog']
*/

// declare a func commonEl
// input = any num of arrs
// output = arr
// output will be only elements contained by all input arrs
function commonEl(...params: []): (string | number)[] {
  // declare an arr to hold common els
  const common: [] = [];
  // filter first arr from input for vals from 2nd
  for (let i = 0; i < params.length; i++) {
    common += params[i].filter((el) => params[i + 1].includes(el));
  }

  return;
}

const arr1 = [2, 10, 'cat', 3, 99, 2000, 'dog', 'lion'];
const arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
const arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

console.log(commonEl(arr1, arr2, arr3)); // -> [2, 3, 2000, 'dog']
