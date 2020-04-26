function largestPalindromeProduct(n) {

  function isPalindroom(n) {
    n = n.toString();
    let nArr = n.split('');
    let compArr = [];
    do {
      if (nArr.shift() !== nArr.pop()) {
        return false;
      }
    } while (nArr.length > 1) 
    return true;
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