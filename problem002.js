function fiboEvenSum(n) {
	let total = 0;

	function fibDriver(n) {
		return n === 0 ? 0 : fib(0, 1, n);
	}
	
	function fib(a, b, n) {
		return n === 1 ? b : fib(b, a + b, n-1);
	}
  let num = 1;
  let fibNum;
  while(fibDriver(num) <= n) {
    fibNum = fibDriver(num);
    console.log(fibNum, total);
		if (fibNum % 2 === 0) {
      total += fibNum;
    }
    num++;
  }	
  console.log(total);
  return total;
}

fiboEvenSum(10);