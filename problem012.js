// Project Euler: Problem 12: Highly divisible triangular number
// https://projecteuler.net/problem=12

// Discord: bright-augury;
// Sorry, suppose you want to count the divisors of 10. you need only iterate through the square root of 10, which is 3.16 . 1 is evenly divisble by 10, so that is one pair (1 and 10), 2 is divisible by 10 so that is another (2 and 5). 3 is not. Because 4 is greater than 3.16, we know that if it were divisible by 10 we would have already counted it
// So in other words, for each i we add 2 to our divisorCount

/**
 * Helper function to get the number of factors for a given number
 * @param {int} num Number for which the number of factors should be found
 * @returns int the number of foctors for a given number
 */
const factorsNum = (num) => {
  const sqrtNum = Math.floor(num**0.5);
  let amount = 0;
  for(let i = 1; i <= num/sqrtNum; i++) {
    if (num % i === 0) amount++;
  }
  return amount*2;
};

/**
 * Function returns the integer sum of all the factors 
 * of the given triangle number
 * 
 * @param {int} n The number of the triangle number
 * @returns int
 */
function divisibleTriangleNumber(n) {
  let trianle = 1;
  let fac = 0;
  while(factorsNum(fac) < n) {
    fac += trianle;
    trianle++;
  } 
  return fac; 
}


divisibleTriangleNumber(5); // 28
divisibleTriangleNumber(23); // 630
divisibleTriangleNumber(500); // 76576500