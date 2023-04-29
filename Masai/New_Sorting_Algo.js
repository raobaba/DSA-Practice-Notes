//https://oj.masaischool.com/contest/3362/problem/03

//Enter code here
function runProgram(input){
    input = input.trim().split("\n");
    var [len,tar] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
  callArray(arr,tar,len);

}
function callArray(arr,tar,len)
{
  for(var i=0;i<len;i++)
  {
      for(var j=0;j<len-1-i;j++)
      {
          if(arr[j]%tar>arr[j+1]%tar)
          {
              
             var temp = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp;
          }
      }
  }
  console.log(arr.join(" "));
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
