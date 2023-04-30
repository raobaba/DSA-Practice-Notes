//https://oj.masaischool.com/contest/3437/problem/02

//Enter code here
function runProgram(input){
    input = input.trim().split("\n");
    var length = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
   for(var i=0;i<arr.length;i++)
   {
       for(var j=i+1;j<arr.length;j++)
       {
           if(arr[i]>arr[j])
           {
               var temp = arr[i];
               arr[i] = arr[j];
               arr[j] = temp;
           }
       }
       
   }
    callArray(arr);
}
   function callArray(arr)
   {
       for(var i=0;i<arr.length;i+=2)
       {
           if(i>0 && arr[i-1]>arr[i])
           {
               var temp = arr[i];
               arr[i] = arr[i-1];
               arr[i-1] = temp;
           }
           if(i<arr.length-1&&arr[i]<arr[i+1])
           {
               var temp = arr[i];
               arr[i] = arr[i+1];
               arr[i+1] = temp;
               
           }
       }
       console.log(arr.join(" "));
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