let arr = [1,2,3,4];
let n = 4;
battleOfOddAndEven(n,arr);

function battleOfOddAndEven(n, arr){
    //write code here
    var even = 0;
    var odd = 0;
    for(var i=0;i<n;i++)
    {
        if(arr[i]%2===0)
        {
            even = even + arr[i];
        }
        else
        {
            odd = odd + arr[i];
        }
    }
    if(odd>even)
    {
        console.log("Odd");
    }
    else
    {
        console.log("Even");
    }
}