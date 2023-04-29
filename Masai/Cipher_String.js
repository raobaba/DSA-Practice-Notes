//https://oj.masaischool.com/contest/4557/problem/08

//Enter code here
function runProgram(input){
    input = input.trim().split("\n");
    var tc = +input[0];
    var line = 1;
    for(var i=0;i<tc;i++)
    {
        var len = +input[line++];
        var str = input[line++].trim().split("");
        cipherString(str);
    }
   
 
}
  function cipherString(str){
    var i=0;
    var bag="";
    while(i<str.length)
    {
      var j=i;
      var count=0;
     while(j<str.length && str[i]==str[j])
     {
           count++;
            j++;
     }
          bag+=str[i]+count;
          i=j;
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