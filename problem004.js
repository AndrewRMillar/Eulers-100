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

  let int = '';
  for (let i = 0; i < n; i++) {
    int += '9';
  }
  const intArr = [parseInt(int), parseInt(int)];


  
  return true;
}

largestPalindromeProduct(3); // 906609


console.log(isPalindroom(10011));


