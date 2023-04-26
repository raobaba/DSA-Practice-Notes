let str = "Rajan";
let N = 5;
charAtOddPos(N,str);

function charAtOddPos(N,str) {
    //write code here
    for(var i=0;i<=N-1;i++)
    {
        if(i%2==1)
        {
            console.log(str[i]);
        }
    }
}