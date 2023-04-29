//https://oj.masaischool.com/contest/3328/problem/01

//Enter code here
function runProgram(input){
    input = input.trim().split("\n");
    var tc = +input[0];
    var line = 1;
    for(var i=0; i<tc; i++){
        var length = +input[line];
        line++;
        var arr1 = input[line].trim().split(" ").map(Number);
        line++
        var arr2 = input[line].trim().split(" ").map(Number);
        line++
        
        twoSum(length,arr1,arr2);
    }
}   

function twoSum(length,arr1,arr2)  {
    

    var left = 0;
    var right = arr2.length-1;
    var count = 0;
    while(left<arr1.length && right>=0)
    {
        if(arr2[right] == arr1[left]){
            left++;
            right--;
            count++;
        }
        else if(arr2[right]<arr1[left])
        {
            right--;
        }
        else if(arr2[right]>arr1[left])
        {
            left++;
        }
        
    }
    console.log(count);
    
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