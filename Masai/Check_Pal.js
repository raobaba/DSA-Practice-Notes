let str = "Rajan";
let N = 5;
checkPalindrome(N,str);

function checkPalindrome(N, str) {
    //write code here
    for(var i=0;i<=N;i++)
    {
        if(str[i]==str[N-1])
        {
            console.log("Yes");
            break;
        }
        else
        {
            console.log("No");
            break;
        }
    }
  
}