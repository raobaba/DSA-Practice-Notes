//https://oj.masaischool.com/contest/3328/problem/02

//Enter code here
function runProgram(input){
    input = input.trim().split("\n");
    var tc = +input[0];
    var line = 1;
    for(var i=0;i<tc;i++)
    {
        var [len,tar] = input[line].trim().split(" ").map(Number);
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        callArray(arr,tar);
    }
    
}
    function callArray(arr,tar)
    {
                    var first = 0;
            var second = 0;
            var count = 0;
            while(first<arr.length && second<arr.length)
            {
              temp = arr[second]-arr[first];
              if( temp == tar && first!=second)
              {
                  count++;
                  break;
              }
              else if(temp<tar)
              {
                  second++;
              }
              else
              {
                  first++;
              }
            }
            if(count>=1)
            {
                console.log("Yes");
            }
            else
            {
                console.log("No");
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