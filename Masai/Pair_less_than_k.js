//https://oj.masaischool.com/contest/3328/problem/04

//Enter code here
function runProgram(input){
    input = input.trim().split("\n");
    var tc = +input[0];
    var line = 1;
    for(var i=0;i<tc;i++)
    {
        var len = +input[line];
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        var tar = +input[line];
        line++;
        callArray(arr,tar);
    }
}
    function callArray(arr,tar)
    {
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
        // console.log(arr);
        var left = 0;
        var right = arr.length - 1;
        var max = -1;
        while(left < right){
                sum = arr[left] + arr[right];
                if (sum < tar)
                  {
                        if (sum > max) max = sum;
                        left++;
                  }
                else
                    {
                         right--;
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