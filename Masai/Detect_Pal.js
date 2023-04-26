let num = "1221";
detectPalindrome(num);

function detectPalindrome(num){
    //write code here
        for(var i=1;i<=num.length;i++)
        {
            if(i==num.length-1)
            {
                console.log("No");
                break;
            }
            else
            {
                console.log("Yes");
                break;
            }
        }
    }