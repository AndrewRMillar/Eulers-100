function multiplesOf3and5(number) {
  let total = 0;
  for(let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 ===0) total += i;
  }
  console.log(total);
  return true;
}
  
multiplesOf3and5(1000); // 2233168