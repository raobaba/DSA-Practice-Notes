//https://oj.masaischool.com/contest/3769/problem/01

//Enter code here
function runProgram(input){
    input = input.trim().split("\n");
    var  len = +input[0];
    var arr1 = input[1].trim().split(" ").map(Number);
    var arr2 = input[2].trim().split(" ").map(Number);
    performMarging(arr1,arr2);

}
    function performMarging(arr1,arr2)
    {
        var first = 0;
        var second = 0;
        var arr = [];
        while(first<arr1.length && second<arr2.length)
        {
            if(arr1[first]<arr2[second])
            {
               arr.push(arr1[first++])+" "; 
            }
            else
            {
                arr.push(arr2[second++])+" ";
            }
        }
        while(first<arr1.length)
        {
            arr.push(arr1[first++])+" ";
        }
        while(second<arr2.length)
        {
            arr.push(arr2[second++])+" ";
        }
        console.log(arr.join(" ")) ;
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