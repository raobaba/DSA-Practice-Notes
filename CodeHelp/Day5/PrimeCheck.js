let n = 100;

for (let i = 2; i <= n; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (i === 1) {
        console.log(i, ":- Not Prime");
    } else if (isPrime) {
        console.log(i, ":- Prime");
    } else {
        console.log(i, ":- Not Prime");
    }
}
