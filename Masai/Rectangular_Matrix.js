//https://oj.masaischool.com/contest/2957/problem/07

//Enter code here
function matrixCal(arr)
{
  for(var i=0;i<arr.length;i++)
  {
      var  bag = "";
      for(var j=0;j<arr[0].length;j++)
      {
          var num = arr[i][j]+1;
          bag = bag + num+" ";
      }
      console.log(bag);
  }
}
function runProgram(input) {
// Write code here
  input = input.trim().split("\n");
  var [rows,colm] = input[0].trim().split(" ").map(Number);
   var mat = [];
   var line = 1;
   var bag = "";
  for(var i=0;i<rows;i++)
  {
     mat.push(input[line].trim(",").split(" ").map(Number));
     line++;
     
  }
  matrixCal(mat);
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