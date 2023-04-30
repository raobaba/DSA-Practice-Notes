//https://oj.masaischool.com/contest/3540/problem/05

//Enter code here
function runProgram(input) {
    input = input.trim().split("\n");
    var str1 = input[0].trim().split("");
    var str2 = input[1].trim().split("");
    var res = callStrings(str1,str2);
    console.log(res);

  }
 function callStrings(str1,str2)
 {
    str1.sort().slice();
    str2.sort().slice();
    var length1 = str1.length;
    var length2 = str2.length;
    if(length1!=length2)
    {
        return "No";
    }
    for(var i=0;i<length1;i++)
    {
        if(str1[i]!=str2[i])
        {
            return "No";
        }
    }
    return "Yes";

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