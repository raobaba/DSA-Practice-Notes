let a = 0;
let b = 1;
let sum = 0;

for (let i = 1; i <= 10; i++) {
  let nextNum = a + b;
  console.log(nextNum);
  a = b;
  b = nextNum;
}
