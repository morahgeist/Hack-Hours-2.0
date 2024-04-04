/*
Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

You can assume that the input string is non-empty.
*/

const mostFrequentChar = (s) => {
  const word = {};
  let maxCount = s[0];
  for (let i = 0; i < s.length; i++) {
    word[s[i]] ? (word[s[i]] += 1) : (word[s[i]] = 1);
  }
  for (let i = 1; i < Object.keys(word).length; i++) {
    if (word[s[i]] === word[maxCount]) i++;
    word[s[i]] > word[maxCount] ? (maxCount = s[i]) : i++;
  }
  return maxCount;
};

mostFrequentChar('bookeeper'); // -> 'e'
mostFrequentChar('david'); // -> 'd'
mostFrequentChar('abby'); // -> 'b'
