// Project Euler: Problem 12: Highly divisible triangular number
// https://projecteuler.net/problem=12

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
  return amount+1;
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