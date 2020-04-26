// What is the smallest positive number that is evenly 
// divisible by all of the numbers from 1 to n?
function smallestMult(n) {
  
  let found = false;
  let num = 0;
  while(found == false) {
    found = true;
    num++;
    for (let i = 1; i <= n; i++) {
      if (num % i !== 0) {
        found = false;
        break;
      }
      
    }
  }
  return num;
}

smallestMult(20); // 232792560 232792561
