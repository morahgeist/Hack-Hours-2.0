/*
A tandem bicycle is a bicycle that's operated by two people: person A and person B. Both people pedal the bicycle, but the person that pedals faster dictates the speed of the bicycle. So if person A pedals at a speed of 5, and person B pedals at a speed of 4, the tandem bicycle moves at a speed of 5 (i.e., tandemSpeed = max (speedA, speedB) ).

You're given two lists of positive integers: one that contains the speeds of riders wearing red shirts and one that contains the speeds of riders wearing blue shirts. Each rider is represented by a single positive integer, which is the speed that they pedal a tandem bicycle at. Both lists have the same length, meaning that there are as many red-shirt riders as there are blue-shirt riders. Your goal is to pair every rider wearing a red shirt with a rider wearing a blue shirt to operate a tandem bicycle.

Write a function that returns the maximum possible total speed or the minimum possible total speed of all of the tandem bicycles being ridden based on an input parameter, fastest. If fastest = true, your function should return the maximum possible total speed; otherwise it should return the minimum total speed.

"Total speed" is defined as the sum of the speeds of all the tandem bicycles being ridden. For example, if there are 4 riders (2 red-shirt riders and 2 blue-shirt riders) who have speeds of 1, 3, 4, 5, and if they're paired on tandem bicycles as follows: [1, 4], [5, 3] , then the total speed of these tandem bicycles is 4 + 5 = 9

Ex.
redShirtSpeeds = [5, 5, 3, 9, 2]
blueShirtSpeeds = [3, 6, 7, 2, 1]
fastest = true
output = 32
*/

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // sort arrs
  const redSort = redShirtSpeeds.sort((a, b) => a - b);
  console.log(redSort);
  const blueSort = blueShirtSpeeds.sort((a, b) => a - b);
  console.log(blueSort);
  // find value of half arr
  // if odd, round up
  const half = Math.ceil(redShirtSpeeds.length / 2);
  console.log(half);
  let combined = [];

  // if fastest = true
  if (fastest === true) {
    // take that number off the end (highest) of both arrs
    // combine and filter for top half value
    combined = redSort.slice(half - 1);
    combined.push(...blueSort.slice(half - 1));
    combined = combined.sort((a, b) => a - b);
    combined = combined.slice(1, combined.length);
    console.log(combined);
  } else {
    // combine both arrs, sort, and take every val at odd index to push into combined

    console.log(combined);
  }
  return combined.reduce((acc, curr) => acc + curr, 0);
}

const redShirtSpeeds = [5, 5, 3, 9, 2];
const blueShirtSpeeds = [3, 6, 7, 2, 1];
const fastest = true;

console.log(tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest)); // 32
