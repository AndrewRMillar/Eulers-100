// Find the sum of all the primes below n.

function primeSummation(n) {
  function isPrime(num) {
    const sqrtNum = Math.floor(num**0.5);
    for(let i = 2; i <= sqrtNum; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let sum = 0;
  for (let i = 2; i < n; i++) {
    if(isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}
primeSummation(140759); // 873608362
primeSummation(2000000); // 142913828922