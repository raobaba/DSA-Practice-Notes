//https://oj.masaischool.com/contest/3031/problem/04

//Enter code here
function runProgram(input) {
    input = input.trim().split("\n");
    var length = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var count = 0;
    for(var i=0;i<arr.length;i++)
    {
        if(i===0)
        {
            if(arr[i]>arr[i+1])
            {
                count++;
            }
        }
        else if(i==arr.length-1)
        {
            if(arr[i]>arr[i-1])
            {
                count++;
            }
        }
        else
        {
            if(arr[i]>arr[i+1] && arr[i]>arr[i-1])
            {
                count++;
            }
        }
    }
    console.log(count);
       
      
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