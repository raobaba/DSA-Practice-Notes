let arr = [2,0,5,7];
let n = 4;
averageOfAll(n,arr);

function averageOfAll(n, arr){
    //write code here
        var sum = 0;
    
    for(var i=0;i<=n-1;i++)
    {
        sum = sum + arr[i];
        
    }
       var average = (sum/n);
        console.log(average);

}