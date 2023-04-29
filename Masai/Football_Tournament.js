//Enter code here

//https://oj.masaischool.com/contest/2975/problem/03
function runProgram(input){
    input = input.trim().split("\n");
    var tc = +input[0];
    var line = 1;
    var str = [];
    for(var i=0;i<tc;i++)
    {
        str.push(input[line]);
        
    }
    callStr(str);
} 
 function callStr(str)
 {
     var obj = {};
     for(var i=0;i<str.length;i++)
     {
         var key = str[i];
         if(obj[key]===undefined)
         {
             obj[key]=1;
         }
         
         else
         {
             obj[key]++;
         }
     }
     var max = 0;
     for(key in obj)
     {
         if(max<obj[key])
         {
             max = obj[key];
             var res = key;
         }
     }
     console.log(key);
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