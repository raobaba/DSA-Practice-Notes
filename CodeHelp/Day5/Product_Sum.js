let n = 18;

let product = 1;
let sum = 0;

for(let i=0;i<=n;i++){
    let digit = n%10;
    product = product * digit;
    sum  = sum + digit;

    n = Math.floor(n/10);
}

let answer = product-sum;
console.log(answer)