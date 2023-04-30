//https://oj.masaischool.com/contest/3407/problem/03

//Enter code here
function runProgram(input){
    input = input.trim().split("\n");
    var tc = +input[0];
    var line = 1;
    for(var i=0;i<tc;i++)
    {
        var len = +input[line];
        line++;
        var arr = input[line].trim();
        line++;
        callString(arr);
    }

}
    function callString(arr)
    {
         var obj = {};
    var count = 0;
    for(var i=0;i<arr.length;i++)
    {
        if(obj[arr[i]]===undefined)
        {
            obj[arr[i]]=1;
        }
        else
        {
            obj[arr[i]]++;
        }
    }
    for(var key in obj)
    {
        if(obj[key]%2==1)
        {
            count++;
        }
    }
    if(count>=2)
    {
        console.log("No");
    }
    else
    {
        console.log("Yes");
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