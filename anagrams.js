/*
Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.
*/

const anagrams = (s1, s2) => {
  return s1.split('').sort().join('') === s2.split('').sort().join('');
};

console.log(anagrams('cats', 'tocs'));
