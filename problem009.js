// There exists exactly one Pythagorean triplet for which a + b + c = 1000. 
// Find the product abc such that a + b + c = n. 
// a < b < c
// a**2 + b**2 = c**2
// a = n - b - c 
// b = n - a - c
// c = n - a - b

//      a      +      b      +      c      = n
// (n - a - b) + (n - a - c) + (n - b - c) = n

//     a**2       +     b**2       =    c**2
// (n - b - c)**2 + (n - a - c)**2 = (n - a - b)**2

function specialPythagoreanTriplet(n) {
  let sumOfabc = n;
  let prodOfabc;
  let a = 1;
  let b = (a + 1);
  let c = n / (a * b);
  
  
  
  return a * b * c;
 }
 
 specialPythagoreanTriplet(1000);
