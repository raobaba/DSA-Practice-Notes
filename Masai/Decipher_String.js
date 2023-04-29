//https://oj.masaischool.com/contest/4557/problem/09

//Enter code here
function runProgram(input){
    input = input.trim().split("\n");
    var tc = +input[0];
    var line = 1;
    for(var i=0;i<tc;i++)
    {
        var len = +input[line++];
        var str = input[line++].trim().split("");
        decipherString(str);
    }

}
  function decipherString(str)
  {
      var counter = 0;
    var num = 0;
    var char = 0;
    var arr=str;
    var bag="";
    for(var i=0;i<str.length;i++){
        if(i%2!==0)
        {
        num=parseInt(arr[i]);
        str[i];
        }
        else if(i%2===0)
        {
            char=str[i];
        }
        counter++;
        if(counter==2)
        {
            for(let j=0;j<num;j++)
            {
                 bag+=char;
            }
            counter=0;
        }
    }
    console.log(bag);
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