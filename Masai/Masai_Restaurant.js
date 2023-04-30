//https://oj.masaischool.com/contest/3530/problem/03

//Enter code here
function runProgram(input){
    input = input.trim().split("\n");
    var tc = +input[0];
    var line = 1;
    var stk = [];
    for(var i=0;i<tc;i++)
    {
        var arr = input[line].split(" ").map(Number);
        line++;
        if(arr[0]==1)
        {
            if(stk.length===0)
            {
                console.log("No Food");
            }
            else
            {
                console.log(stk[stk.length-1]);
                stk.pop();
            }
        }
        else
        {
            stk.push(arr[1]);
        }
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