let arr = [1,2,3,4,5];
let n = 5;
evenArray(n,arr);

function evenArray(n, arr){
    //write code here
     for(var i=0;i<=n;i++)
    {
        if(arr[i]%2===0)
        {
            console.log(arr[i]);
        }
    }
}