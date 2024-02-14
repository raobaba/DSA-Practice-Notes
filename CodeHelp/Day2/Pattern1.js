let n = 5;
// for(let i=1;i<=n;i++){
//     let bag = "";
//     for(let j=1;j<=n;j++){
//         bag = bag + j+" ";
//     }
//     console.log(bag);
//     1 2 3 4 5
//     1 2 3 4 5
//     1 2 3 4 5
//     1 2 3 4 5
//     1 2 3 4 5
// }

// for(let i=1;i<=n;i++){
//     let bag = "";
//     for(let j=1;j<=n;j++){
//         bag = bag + i+" ";
//     }
//     console.log(bag)
//     1 1 1 1 1
//     2 2 2 2 2
//     3 3 3 3 3
//     4 4 4 4 4
//     5 5 5 5 5
// }

// for(let i=0;i<=n;i++){
//     let bag = "";
//     for(let j=n;j>=1;j--){
//         bag = bag + j+" ";
//     }
//     console.log(bag)
//     5 4 3 2 1
//     5 4 3 2 1
//     5 4 3 2 1
//     5 4 3 2 1
//     5 4 3 2 1
//     5 4 3 2 1
// }

// for(let i=1;i<=n;i++){
//     let bag = "";
//     for(let j=0;j<n;j++){
//         bag = bag + (i+j)+" ";
//     }
//     console.log(bag)
//     1 2 3 4 5
//     2 3 4 5 6
//     3 4 5 6 7
//     4 5 6 7 8
//     5 6 7 8 9
// }
// let count = 1;
// for (let i = 1; i <= n; i++) {
//   let bag = "";
//   for (let j = 1; j <= n; j++) {
//     bag = bag + count + " ";
//     count++;
//   }
//   console.log(bag)
//   1 2 3 4 5
//   6 7 8 9 10
//   11 12 13 14 15
//   16 17 18 19 20
//   21 22 23 24 25
// }

// for(let i=1;i<=n;i++){
//     let bag = "";
//     for(let j=1;j<=i;j++){
//         bag = bag + "*"+" ";
//     }
//     console.log(bag)
//     *
//     * *
//     * * *
//     * * * *
//     * * * * *
// }

// for(let i=n;i>=1;i--){
//     let bag = "";
//     for(let j=1;j<=i;j++){
//      bag = bag + "*"+" ";
//     }
//     console.log(bag)
//     * * * * *
//     * * * *
//     * * *
//     * *
//     *
// }

// for(let i=1;i<=n;i++){
//     let bag = "";
//     for(let j=0;j<i;j++){
//        bag = bag + (j+i) +" ";
//     }
//     console.log(bag)
//     1
//     2 3
//     3 4 5
//     4 5 6 7
//     5 6 7 8 9
// }

// let count = 1;
// for(let i=1;i<=n;i++){
//     let bag = "";
//     for(let j=0;j<i;j++){
//       bag = bag + count +" ";
//       count++;
//     }
//     console.log(bag)
//     1
//     2 3
//     4 5 6
//     7 8 9 10
//     11 12 13 14 15
// }

// for(let i=1;i<=n;i++){
//     let bag = "";
//     for(let j=i;j>=1;j--){
//         bag = bag + j+" ";
//     }
//     console.log(bag)
//     1
//     2 1
//     3 2 1
//     4 3 2 1
//     5 4 3 2 1
// }

// let alpha = ['A','B','C'];

// for(let i=0;i<alpha.length;i++){
//     let bag = "";
//     for(let j=0;j<alpha.length;j++){
//         bag = bag + alpha[i]+" ";
//     }
//     console.log(bag)
//     A A A
//     B B B
//     C C C
// }

// let count= 0;
// let alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// for(let i=0;i<5;i++){
//     let bag = "";
//     for(let j=0;j<5;j++){
//         bag = bag + alpha[count]+" ";
//         count++;
//     }
//     console.log(bag)
//     A B C D E
//     F G H I J
//     K L M N O
//     P Q R S T
//     U V W X Y
// }

// for(let i=1;i<=n;i++){
//     let bag = "";
//     for(let j=n;j>i;j--){
//         bag = bag + " "+" "
//     }
//     for(let j=0;j<i;j++){
//         bag = bag + "*"+" ";
//     }
//     console.log(bag)
//         *
//       * *
//     * * *
//   * * * *
// * * * * *
// }

// for (let i = 1; i <= n; i++) {
//   let bag = "";
//   for (let j = 0; j < i; j++) {
//     bag = bag + " " + " ";
//   }
//   for (let j = n; j >= i; j--) {
//     bag = bag + "*" + " ";
//   }
//   console.log(bag);
//   * * * * *
//     * * * *
//       * * *
//         * *
//           *
// }

// for (let i = 1; i <= n; i++) {
//   let bag = "";
//   for (let j = n; j > i; j--) {
//     bag = bag + " " + " ";
//   }
//   for (let j = 1; j <= i; j++) {
//     bag = bag + j + " ";
//   }
//   for (let j = i-1; j >=1; j--) {
//     bag = bag + j + " ";
//   }

//   console.log(bag);
//         1
//       1 2 1
//     1 2 3 2 1
//   1 2 3 4 3 2 1
// 1 2 3 4 5 4 3 2 1

// }
