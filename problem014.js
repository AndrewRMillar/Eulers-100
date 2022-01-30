// Calculate the sequence length
const seqLen = (n) => {
  let sequenceLength = 1;

  while(n > 1) {
    if(n % 2 === 0) {
      n = n/2;
    } else {
      n = n*3 + 1;
    }
    sequenceLength++;
  }
  return sequenceLength;
}

function longestCollatzSequence(limit) {
  let longest = {number: 0, sequence: 0};
  let sequenceLength = 1;

  while(limit > 1) {
    sequenceLength = seqLen(limit);
    if(sequenceLength > longest.sequence){
      longest.sequence = sequenceLength;
      longest.number = limit;
    }
    limit--;
  }
  return longest.number;
}

longestCollatzSequence(1000000); // 837799
