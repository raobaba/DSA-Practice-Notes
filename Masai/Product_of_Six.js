//https://oj.masaischool.com/contest/3215/problem/15

//Enter code here
function runProgram(input){
    input = input.trim().split("\n");
    var num = input[0].trim().split(" ").map(Number);
    var fact = 1;
    for(var i=0;i<num.length;i++)
    {
        fact = fact*num[i];
    }
    console.log(fact);
    
}


 

if (process.env.USER === "") {
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


