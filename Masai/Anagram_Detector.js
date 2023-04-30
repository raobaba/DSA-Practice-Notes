//https://oj.masaischool.com/contest/3407/problem/01

//Enter code here
function runProgram(input){
    input = input.trim().split("\n");
    var arr1 = input[0].trim().replace(/\s/g,"").split("");
    var arr2 = input[1].trim().replace(/\s/g,"").split("");
 //   console.log(arr1);
    callArray(arr1,arr2);
   
 }
    function callArray(arr1,arr2)
    {
        var length1 = arr1.sort().join("");
        var length2 = arr2.sort().join("");
        if(length1==length2)
        {
            console.log("True");
        }
        else
        {
            console.log("False");
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