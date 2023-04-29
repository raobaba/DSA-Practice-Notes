//https://oj.masaischool.com/contest/3294/problem/17

//Enter code here
function runProgram(input){
    input = input.trim().split("\n");
    var [len,tar] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    callArray(arr,tar);
}
   function callArray(arr,tar)
   {
       var max = -Infinity;
       var sum = 0;
       for(var i=0;i<tar;i++)
       {
           sum = sum + arr[i];
       }
      if(max<sum)
      {
          max = sum;
      }
          for(var i=tar;i<arr.length;i++)
       {
           sum = sum + arr[i];
           sum = sum - arr[i-tar];
           if(max<sum)
           {
               max = sum;
           }
       }
       console.log(max);

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