let res = isPowerOfTwo(32);
if(res)
console.log('true');
else
console.log('false');
function isPowerOfTwo(n) {
    let limit = Math.pow(2,31);
    let ans = 1;
    for (let i = 0; i <= 30; i++) {
      if (ans === n) {
        return true;
      }
      if (ans < limit) {
        ans = ans * 2;
      }
    }
    return false;
  }
  