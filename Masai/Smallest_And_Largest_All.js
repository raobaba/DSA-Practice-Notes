let arr = [2,0,-1,4];
let n = 4;
smallestAndLargestOfAll(n,arr);

function smallestAndLargestOfAll(n, arr){
    //write code here
            var pad_min = arr[0];
    for(var i=0;i<n;i++)
    {
        if(pad_min>arr[i])
        {
            pad_min=arr[i];
        }
    }
    var pad_max = arr[0];
    for(var i=0;i<n;i++)
    {
        if(pad_max<arr[i])
        {
            pad_max=arr[i];
        }
    }
    console.log(pad_min);
    console.log(pad_max);

}