// Sieve of Eratosthenes

// Pseudocode

// algorithm Sieve of Eratosthenes is
// input: an integer n > 1.
// output: all prime numbers from 2 through n.

// let A be an array of Boolean values, indexed by integers 2 to n,
// initially all set to true.

// for i = 2, 3, 4, ..., not exceeding √n do
//     if A[i] is true
//         for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n do
//             A[j] := false

// return all i such that A[i] is true.



function findPrimes(n) {
  const primes = [0,1];
  // 
  for(let i = 2; i < n; i++) {
    primes.push(true);
  }

  let multi = 1;
  for(let i=2; i < Math.floor(n**0.5); i++) {
    console.log(`i ${i}`, primes[i]);
    if (primes[i] === true) {
      for (let j = i*2; j < n; j += i*multi) {
        // console.log(primes.length, j);
        console.log(j, primes[j]);
        primes[j] = false;
        multi++;
      }
    }
  }
  console.log(primes);
  return primes.filter((el) => el === true);
}