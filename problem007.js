// What is the nth prime number?

function nthPrime(n) {
  let primeArr = [];
  
  const isPrime = num => {
    const sqrtNum = Math.floor(num**0.5);
    for(let i = 2; i <= sqrtNum; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let num = 1;
  while(primeArr.length <= n) {
    if (isPrime(num)) {
      primeArr.push(num);
    }
    num++;
  }
  return primeArr.pop();
}

nthPrime(10001); //104743
