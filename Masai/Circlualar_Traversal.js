//https://oj.masaischool.com/contest/2990/problem/03


//Enter code here
function CallFunctionAgain(arr){
    var mat = [];
    var top = 0;
    var bottom = arr.length-1;
    var left = 0;
    var right = arr.length-1;
    for (var i=bottom;i>=top;i--){
        mat.push(arr[i][left]);
    }
    left++;
    for (var i=left;i<=right;i++){
         mat.push(arr[top][i]);
    }
    top++;
    for (var i=top;i<=bottom;i++){
         mat.push(arr[i][right]);
    }
    right--;
    for (var i=right;i>=left;i--){
         mat.push(arr[bottom][i]);
    }
    var bag = "";
    for(var i=0;i<mat.length;i++)
    {
        bag = bag + mat[i]+" ";
    }
    console.log(bag);
}
function runProgram(input) {
input = input.trim().split("\n");
var tc = +input[0];
var line = 1;

   for(var i=0;i<tc;i++)
   {
       var size = +input[line];
       line++;
       var mat = [];
       for(var j=0;j<size;j++)
       {
           mat.push(input[line].trim().split(" ").map(Number));
           line++;
           
       }
      CallFunctionAgain(mat);
    
   }
  
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
