let str = "stvr";
let N = 4;
checkVowel(N,str);
function checkVowel(N, str) {
    //write code here
    var found = false;
    for(var i=0;i<=N-1;i++)
    {
        
        if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u")
        {
            found = true;
            console.log("true");
            break;
        }
     
    }
    if(found===false)
    {
        console.log("false");
    }
    
  }