// let n = 4;
// for(let i=1;i<=n;i++){
//     let bag = "";
//     for(let j=n;j>=1;j--){
//        bag = bag + j+" ";
//     }
//     console.log(bag)
// }

// let n = 4;
// let count = 1;
// for(let i=1;i<n;i++){
//     let bag  = "";
//     for(let j=1;j<=n;j++){
//         bag = bag + count +" ";
//         count++;
//     }
//     console.log(bag)

// }

// *
// * *
// * * *
// * * * *
// * * * * *
// let n = 5;
// for(let i=1;i<=n;i++){
//     let bag = "";
//     for(let j=0;j<i;j++){
//         bag = bag + "*"+" ";
//     }
//     console.log(bag)
// }

// let n = 5;
// let count = 1;
// for (let i = 1; i <= n; i++) {
//   let bag = "";
//   for (let j = n; j >= i; j--) {
//     bag = bag + count + " ";
//     count++;
//   }
//   console.log(bag);
// }

// let n = 5;
// for(let i=1;i<n;i++){
//   let bag = "";
//   for(let j=0;j<i;j++){
//     bag = bag + i+" ";
//   }
//   console.log(bag);
// }

// let n = 5;
// let count = 1;
// for(let i=0;i<=n;i++){
//   let bag = "";
//   for(let j=0;j<i;j++){
//     bag = bag + count+" ";
//     count++;
//   }
//   console.log(bag);
// }

// let n = 5;
// let count = 1;
// let i = 0;
// while(i<=n){
//   let bag = "";
//   let j = 0;
//   while(j<i){
//     bag = bag + count+" ";
//     count++;
//     j++;
//   }
//   console.log(bag);
//   i++;
// }

// let n = 5;
// for(let i=1;i<n;i++){
//   let bag = "";
//   for(let j=i;j>0;j--){
//     bag = bag + j+" ";
//   }
//   console.log(bag);
// }

// let alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// let count = 0;
// for (let i = 0; i < alpha.length; i++) {
//   let bag = " ";
//   for (let j = 0; j <= i; j++) {
//     bag = bag + alpha[count] + " ";
//     count++;

//   }
//   console.log(bag);
// }

// let n = 5;
// for(let i=0;i<n;i++){
//     let bag = "";
//     for(let j=i;j>0;j--){
//         bag = bag + j+" ";
//     }
//     console.log(bag);
// }

// let num = 5;
// let i = 0;
// while(i<num){
//     let bag = "";
//     let j = i;
//     while(j>0){
//         bag = bag + j+" ";
//         j--
//     }
//     console.log(bag);
//     i++;
// }

// let alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// let n = 5;
// for(let i=0;i<n;i++){
//     let bag = "";
//     for(let j=0;j<n;j++){
//         bag = bag + alpha[i+j]+" ";
//     }
//     console.log(bag)
// }

// A B C D E
// B C D E F
// C D E F G
// D E F G H
// E F G H I

// let alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
// let n = 5;
// for (let i = 0; i < n; i++) {
//   let bag = "";
//   for (let j = 0; j <= i; j++) {
//     bag = bag + alpha[i] + " ";
//   }
//   console.log(bag);
// }
// A
// B B
// C C C
// D D D D
// E E E E E

// let alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
// let n = 5;
// for (let i = n; i >= 0; i--) {
//   let bag = "";
//   for (let j = i; j <= n; j++) {
//     bag = bag + alpha[i] + " ";
//   }
//   console.log(bag);
// }
// F
// E E
// D D D
// C C C C
// B B B B B
// A A A A A A

// let n = 6;
// for (let i = 0; i < n; i++) {
//   let bag = "";
//   for(let j=n;j>i+1;j--){
//     bag = bag + " ";
//   }
//   for(let k = 0;k<=i;k++){
//     bag = bag + "*";
//   }
//   console.log(bag);
// }
//      *
//     **
//    ***
//   ****
//  *****
// ******

let n = 6;
for (let i = 0; i < n; i++) {
  let bag = "";
  for(let j=n;j>i+1;j--){
    bag = bag + " ";
  }
  for(let k = 0;k<=i;k++){
    bag = bag + "*";
  }
  console.log(bag);
}