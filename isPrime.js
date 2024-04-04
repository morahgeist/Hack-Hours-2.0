const isPrime = (n) => {
  if (n < 2) return false;
  if (n === 2) return true;
  // can use square root, num in half is the lowest multiplier (2)
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

console.log(isPrime(2)); // -> true
console.log(isPrime(3)); // -> true
console.log(isPrime(4)); // -> false
console.log(isPrime(5)); // -> true
console.log(isPrime(6)); // -> false
console.log(isPrime(7)); // -> true
console.log(isPrime(8)); // -> false
console.log(isPrime(25)); // -> false
console.log(isPrime(31)); // -> true
console.log(isPrime(2017)); // -> true
console.log(isPrime(2048)); // -> false
console.log(isPrime(1)); // -> false
console.log(isPrime(713)); // -> false
