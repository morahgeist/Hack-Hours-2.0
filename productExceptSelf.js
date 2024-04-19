/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 
Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/

var productExceptSelf = function (nums) {
  //   const product = function (arr) {
  //     return arr.reduce((acc, curr) => acc * curr, 1);
  //   };
  //   const result = [];
  //   for (let i = 0; i < nums.length; i++) {
  // if (i === 0) {
  //   const firstSlice = nums.slice(1, nums.length);
  //   console.log(firstSlice);
  //   result.push(product(firstSlice));
  //   console.log(result);
  // }
  // if (i === nums.length - 1) {
  //   const lastSlice = nums.slice(0, nums.length - 1);
  //   console.log(lastSlice);
  //   result.push(product(lastSlice));
  //   console.log(result);
  // }
  //     const sliceA = nums.slice(0, i);
  //     const sliceB = nums.slice(i + 1);
  //     const split = [...sliceA, ...sliceB];
  //     console.log(split);
  //     result.push(product(split));
  //   }
  //   return result;

  const output = new Array(nums.length).fill(1);
  let prefix = (postfix = 1);
  for (let i = 0; i < nums.length; i++) {
    output[i] = prefix;
    prefix *= nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= postfix;
    postfix *= nums[i];
  }
  return output;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
