//https://oj.masaischool.com/contest/2990/problem/05



//Enter code here
function runProgram(input) {
    input = input.trim().split("\n");
    var [len,tar] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    var count = 0;
    var count1 = 0;
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]<=tar)
        {
            count++;
        }
        else
        {
            count1++;
            if(count1==2)
            {
                break;
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