//https://oj.masaischool.com/contest/3400/problem/02

function checkForSymmetry(n, matrix) {
    //write code here
    //console n,matrix and check the input response
     let horizontal = true,
    vertical = true,
    index = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      if (matrix[i][j] !== matrix[i][n - j - 1]) {
        vertical = false;
      }
    }
    for (let j = 0; j < Math.floor(n / 2); j++) {
      if (matrix[j][i] !== matrix[n - j - 1][i]) {
        horizontal = false;
      }
    }
  }
  if (horizontal === true && vertical === true) {
    console.log("BOTH");
  } else if (horizontal === true) {
    console.log("HORIZONTAL");
  } else if (vertical === true) {
    console.log("VERTICAL");
  } else {
    console.log("NO");
  }
}