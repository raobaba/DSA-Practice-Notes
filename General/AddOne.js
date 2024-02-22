let arr = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

let result = PlusOne(arr);
console.log(result);


function PlusOne(digits) {
   let carry = 1;

    for (let i = digits.length - 1; i >= 0; i--) {
        const sum = digits[i] + carry;
        digits[i] = sum % 10;
        carry = Math.floor(sum / 10);
    }

    if (carry > 0) {
        digits.unshift(carry);
    }

    return digits;
};