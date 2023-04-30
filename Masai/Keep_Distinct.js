//https://oj.masaischool.com/contest/3419/problem/01

//Enter code here
function runProgram(input){
    input = input.trim().split(" ");
    var str = input[0];
    var unique = "";
    var count = 0;
    var obj = {};
    for(var i=0;i<str.length;i++)
    {
       if(obj[str[i]]===undefined)
       {
           obj[str[i]]=1;
       }
       else
       {
           obj[str[i]]++;
       }
    }
    var bag = "";
    for(var key in obj)
    {
        bag = bag + key;
    }
    console.log(bag);
    


   
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