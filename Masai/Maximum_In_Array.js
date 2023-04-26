let arr = [1,2,3,4,5];
let N = 5;
maximumInArray(N,arr);

function maximumInArray(N,arr){
    //write code here
    
    var pad = arr[0];
    for(var i=0;i<=N;i++)
    {
        if(pad<arr[i])
        {
            pad = arr[i];
        }
    }
    console.log(pad);
    
   
}