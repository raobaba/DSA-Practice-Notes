let res = isPowerOfTwo(3);
if(res)
console.log('true');
else
console.log('false');
function isPowerOfTwo(n) {
    let ans = 1;
    for (let i = 0; i <= 30; i++) {
      if (ans === n) {
        return true;
      }
      if (ans < Math.floor(Number.MAX_SAFE_INTEGER / 2)) {
        ans = ans * 2;
      }
    }
    return false;
  }
  