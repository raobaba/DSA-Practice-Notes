//https://oj.masaischool.com/contest/3540/problem/02

//Enter code here
function runProgram(input) {
    input = input.trim().split("\n");
    var tc = +input[0];
    var line = 1;
    for(var i=0;i<tc;i++)
    {
        var str = input[line].trim().split("");
        line++;
        callString(str);
    }
  }
    function callString(str)
{ 
  var stack = [];

  var flag =0;

  for ( var  i=0;i<str.length;i++){
  
    if( str[i] == '(' || str[i] == '{' || str[i] == '[' )
           stack.push(str[i]);
    else{
         if(stack.length ===0){
             flag = 1;
             break;
         }
        
         else{ 
             if( ( str[i] == ')' && stack[stack.length-1] != '(' ) || ( str[i] == '}' && stack[stack.length-1] != '{' ) || ( str[i] == ']' && stack[stack.length-1] != '[' ) ){
                  flag  = 1;
                  break;
             }
             else
                 stack.pop();
         }
   }
}

if(flag == 1 )
  console.log("not balanced");

else{
  
  if(stack.length===0)
    console.log("balanced");
  
  else
    console.log("not balanced");
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