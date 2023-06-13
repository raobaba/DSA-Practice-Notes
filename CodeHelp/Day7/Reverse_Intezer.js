let arr = 123;
let res = ReverseIntezer(arr);
console.log(res);
function ReverseIntezer(arr) {
    const limit = Math.pow(2, 31);
    let ans = 0;
    while (arr !== 0) {
        let digit = arr % 10;
        ans = ans * 10 + digit;
        arr = Math.trunc(arr / 10);
        if (ans < -limit || ans > limit - 1) {
            return 0;
        }
    }
    return ans;
}