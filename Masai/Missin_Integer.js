//https://oj.masaischool.com/contest/2926/problem/07

//Enter code here
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    var arr = input[0].trim().split(" ").map(Number);
    // console.log(arr);
            //      sum = 0
            // max = 0
            // for Integer i in array:
            // sum = sum + i;-if (i>max) max = i;
            // actual_sum = (max * max+1)/2
            // value = actual_sum - sum
            // if (value == 0) print N
            // else print value
            // console.log(arr.length);
            var sum = 0;
            var max = 0;
            for(var i=0;i<arr.length;i++)
            {
                sum = sum + arr[i];
                {
                    if(arr[i]>max)
                    {
                        max =arr[i];
                    }
                    // console.log(max);
                }
                
            }
            // console.log(sum);
            // console.log(max);
            var sum1 = 0;
            sum1 =  ((max)*(max+1))/2;
            console.log(sum1-sum);
            
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