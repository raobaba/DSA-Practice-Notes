//Enter code here
 var input = 7;
 //output = masai
 runProgram(input);
function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0];
    if(n%5===0 && n%7===0){
        console.log("Masai School");
    }else if(n%5===0){
        console.log("School");
    }else if(n%7===0){
        console.log("Masai");
    }else{
        console.log("Hurray!")
    }
 }
   