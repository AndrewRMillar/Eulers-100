function largestPalindromeProduct(n) {

    function isPalindroom(n) {
      n = n.toString();
      let reverseN = n.split('').reverse().join('');
      if (n == reverseN) {
        return true;
      }
      return false;
    }

  let intStr = '';
  for (let i = 0; i < n; i++) {
    intStr += '9';
  }
  const intArr = [parseInt(intStr), parseInt(intStr)];
  
  for(let i = intArr[0]; i > (intArr[0] - 100); i--) {
    for(let j = intArr[1]; j > (intArr[1] - 100); j--) {
      if (isPalindroom(i*j)) return i*j;
    }
  }

  return false;
}

largestPalindromeProduct(3); // 906609