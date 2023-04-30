//https://oj.masaischool.com/contest/3530/problem/02
//Enter code here
function runProgram(input){
    var str = input.trim().split("");
    // console.log(str);
    reduceString(str);
    
}
    function reduceString(str)
    {
       var stack = [];
       for(var i=0;i<str.length;i++)
       {
           if(stack.length !==0 && str[i]==stack[stack.length-1])
           {
               stack.pop();
           }
           else
           {
               stack.push(str[i]);
           }
       }
       if(stack.length===0)
       {
           console.log("Empty String");
       }
       else
       {
           console.log(stack.join(""));
       }
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