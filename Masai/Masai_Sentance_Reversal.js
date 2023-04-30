//https://oj.masaischool.com/contest/3540/problem/04

//Enter code here
function runProgram(input) {
    input = input.trim().split("\n");
    var str = input[0].trim().split(" ");
    var bag = "";
    for(var i=str.length-1;i>=0;i--)
    {
        bag = bag + str[i]+" ";
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