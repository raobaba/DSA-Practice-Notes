let res = findComplement(5);
console.log(res);
function findComplement(n) {
    let m = n;
    let mask = 0;
    
    if (n === 0) {
      return 1;
    }
    
    while (m !== 0) {
      mask = (mask << 1) | 1;
      m = m >> 1;
    }
    
    let ans = (~n) & mask;
    
    return ans;
  }
