//https://oj.masaischool.com/contest/2987/problem/04

function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let arr1 = input[1].trim().split(" ").map(Number);
    let arr2 = input[2].trim().split(" ").map(Number);
    cureDisease(n, arr1, arr2);
  }
  
  function cureDisease(n, arr1, arr2) {
    let count = 0;
    for (let i = 0; i < n; i++) {
      if (arr1[i] > arr2[i]) {
        count++;
      }
    }
    if (count === n) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
  
  if (process.env.USERNAME === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }