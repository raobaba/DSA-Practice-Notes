//https://oj.masaischool.com/contest/3540/problem/01

//Enter code here
function runProgram(input) {
    input = input.trim().split("\n");
    var len = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    // console.log(arr);
    callArray(arr);
    
} 
  function callArray(arr)
  {
     var stack = [];
     var ans = [];
     
     for(var i=0;i<arr.length;i++)
     {
         while(stack.length>0 && stack[stack.length-1]>=arr[i])
         {
             stack.pop();
         }
         if(stack.length===0)
         {
             ans[i] = -1;
         }
         else if(stack[stack.length-1]<arr[i])
         {
             ans[i] = stack[stack.length-1];
         }
         stack.push(arr[i]);
       
     }
     console.log(ans.join(" "));
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