//https://oj.masaischool.com/contest/2990/problem/04


//Enter code here
function runProgram(input) {
    input = input.trim().split("\n");
    var tc = +input[0];
    var line = 1;
    for(var i=0;i<tc;i++)
    {
        var length = +input[line];
        line++;
        var str = input[line].trim();
        line++;
        callStr(str);
    }
  }
    function callStr(str)
    {
        var obj = {};
        for(var i=0;i<str.length;i++)
        {
            if(obj[str[i]]===undefined)
            {
                obj[str[i]]=1;
            }
            else
            {
                obj[str[i]]++;
            }
        }
        var count = 0;
        for(var key in obj)
        {
            if(obj[key]%2==1)
            {
                count++;
            }
        }
        if(count>=2)
        {
            console.log("Not Possible!");
        }
        else
        {
            console.log("Possible!");
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
