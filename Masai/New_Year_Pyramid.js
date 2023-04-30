//https://oj.masaischool.com/contest/3400/problem/07

//Enter code here
function runProgram(input){
    input = input.trim().split("\n");
    var num = +input[0];
    var  level = 1;
    while(num>0)
    {
        required = Math.floor([level*(level+1)]/2);
        if(required>num)
        {
            break;
        }
        level++;
        num = num-required;
    }

console.log(level-1);

   
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