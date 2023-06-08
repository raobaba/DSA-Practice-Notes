let x = 312134;
let res = isPalindrome(x);
console.log(res);
 function isPalindrome(x){
    let y = 0;
    let num = x;
    while (num > 0) {
        let tem = num % 10;
        y = y * 10 + tem;
        num = Math.floor(num / 10);
    }
    if (x == y) return true;
    else return false;
};