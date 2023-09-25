/*
It's photo day at the local school, and you're the photographer assigned to take class photos. The class that you'll be photographing has an even number of students, and all these students are wearing red or blue shirts. In fact, exactly half of the class is wearing red shirts, and the other half is wearing blue shirts. You're responsible for arranging the students in two rows before taking the photo. Each row should contain the same number of the students and should adhere to the following guidelines:
• All students wearing red shirts must be in the same row.
• All students wearing blue shirts must be in the same row.
• Each student in the back row must be strictly taller than the student directlv in front of them in the front row.

You're given two input arrays: one containing the heights of all the students with red shirts and another one containing the heights of all the students with blue shirts. These arrays will always have the same length, and each height will be a positive integer. Write a function that returns whether or not a class photo that follows the stated guidelines can be taken.
Note: you can assume that each class has at least 2 students.

redShirtHeights = [5, 8, 1, 3, 4]
blueShirtHeights = [6, 9, 2, 4, 5]
true // Place all students with blue shirts in the back row.
*/

// declare a func classPhotos
// input = 2 arrs
// output = boolean
function classPhotos(redShirtHeights, blueShirtHeights) {
  // find max height of both arrs
  // arr with the max max height will be back row, since no one is taller
  const redMax = Math.max(redShirtHeights);
  const blueMax = Math.max(blueShirtHeights);
  // sort arrs
  redShirtHeights = redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights = blueShirtHeights.sort((a, b) => a - b);
  if (Math.max(redMax, blueMax) === redMax) {
    // iterate over arr and make sure all back vals are greater than vals in front
    for (let i = 0; i < redShirtHeights.length; i++) {
      if (redShirtHeights[i] < blueShirtHeights[i]) return false;
    }
  } else {
    for (let i = 0; i < blueShirtHeights.length; i++) {
      if (blueShirtHeights[i] < redShirtHeights[i]) return false;
    }
  }
  return true;
}

console.log(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]));
console.log(classPhotos([5, 8, 8, 3, 4], [6, 9, 2, 4, 5]));
