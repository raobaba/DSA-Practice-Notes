//https://oj.masaischool.com/contest/3419/problem/03

//Enter code here
function runProgram(input){
    input = input.trim().split("\n");
    var tc = +input[0];
  //   console.log(tc);
     var line = 1;
     for(var i=0;i<tc;i++)
     {
         var arr1 = input[line].trim().split("");
         line++;
      //   console.log(arr);
         var arr2 = input[line].trim().split("");
         line++;
      //   console.log(arr1);
         callArray(arr1,arr2);
     }
        
  }
      function callArray(arr1,arr2)
      {
         var arr3 = arr1.sort().join("");
         var arr4 = arr2.sort().join("");
         if(arr3==arr4)
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