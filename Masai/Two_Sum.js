//https://oj.masaischool.com/contest/3294/problem/16

//Enter code here
function runProgram(input){
    input = input.trim().split("\n");
    var tc = +input[0];
    var line = 1;
    for(var i=0;i<tc;i++)
    {
        var [len,tar] = input[line].trim().split(" ").map(Number);
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
       callArray(arr,tar);
    }
}
    function callArray(arr,tar)
    {
       var left = 0;
       var right = arr.length-1;
       var mat = [];
       while(left<right)
       {
           sum = arr[left]+arr[right];
           if(sum>tar)
           {
               right--;
           }
           else if(sum<tar)
           {
               left++;
           }
           else
           {
              console.log(left,right);
              return;
           }
       }
       console.log(-1,-1);
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