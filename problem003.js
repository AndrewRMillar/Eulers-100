function largestPrimeFactor(number) {
  // works
  function isPrime(num) {
    const sqrtNum = Math.floor(num**0.5);
    for(let i = 2; i <= sqrtNum; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  // Loop over all the numbers that that could be an prime
  for(let i = Math.floor(number/2); i >= 2; i--) {
    // Does the number devide the number into an int
    if (Number.isInteger(number/i)) {
      // If it is a prime return it
      console.log(i);
      if (isPrime(i)) {
        return i;
      }
    }
  }
  return false;
}