//https://oj.masaischool.com/contest/3031/problem/02

//Enter code here
function rotate(size,N,arr){
    var x = N % size;
    var str1 = "";
    var str2 = "";
    if(N == size){
        arr = arr.join(" ");
        console.log(arr);
    }
    else{
         for(i=0;i<size-x;i++){
              str1 = str1 + arr[i] + " ";
            }
         for(j=size-x;j<size;j++){
              str2 = str2 + arr[j] + " ";
            }
    console.log(str2 + str1);  
    }
}
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    var tc = +input[0];
    var line = 1;
    
    for(var i=0;i<tc;i++)
    {
        var [size,N] = input[line].trim().split(" ").map(Number);
        line++;
        var arr  = input[line].trim().split(" ").map(Number);
        line++;
        // console.log(arr);
        rotate(size,N,arr);
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