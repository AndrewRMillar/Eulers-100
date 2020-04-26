// Find the difference between the sum of the squares of the 
// first n natural numbers and the square of the sum.

function sumSquareDifference(n) {

  let sumSquare = 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sumSquare += i**2;
    sum += i;
  }
  return sum**2 - sumSquare;
}

sumSquareDifference(100); //25164150
