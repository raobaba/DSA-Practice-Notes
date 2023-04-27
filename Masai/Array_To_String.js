//Enter code here

https://oj.masaischool.com/contest/2926/problem/06
function runProgram(input) {
    input = input.trim().split("\n");
    var size = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    // console.log(arr);
    var bag = "";
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]<=0)
        {
            bag = bag + 0;
        }
        else
        {
            bag = bag + arr[i];
        }
        
    }
    console.log(bag);
   
  }
  if (process.env.USERNAME === "sd120") {
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
      process.exit(0) ;
    });
  }