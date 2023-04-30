//https://oj.masaischool.com/contest/3352/problem/07

//Enter code here
function runProgram(input){
    input = input.trim().split("\n");
    var [m,n] = input[0].trim().split(" ").map(Number);
    var line = 1;
    var arr1 = [];
    for(var k=0;k<m;k++)
    {
        arr1.push(input[line++].trim().split(" ").map(Number));
    }
    var [i,j] = input[line++].trim().split(" ").map(Number);
    var arr2 = [];
    for(var l=0;l<i;l++)
    {
        arr2.push(input[line++].trim().split(" ").map(Number));
    }

        var sum1 = 0;
        for(var a=0;a<m;a++)
        {
            for(var b=0;b<n;b++)
            {
                sum1 = sum1 + arr1[a][b];
            }
        }
        var sum2 = 0;
       for(var p=0;p<i;p++)
       {
           for(var q=0;q<j;q++)
           {
               sum2 = sum2 + arr2[p][q];
           }
       }
      console.log(Math.max(sum1,sum2));
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