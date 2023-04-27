let N = 3;
let M = 3;
let arr = [[1,2,3],[4,5,6],[7,8,9]];
evenSumColumns(N,M,arr);

function evenSumColumns(N,M,arr){
    //write code here
    
    for(var i=0;i<M;i++)
    {
        var sum = 0;
        for(var j=0;j<N;j++)
        {
            if(arr[j][i]%2===0)
            {
                sum = sum +arr[j][i];
            }
        }
        console.log(sum);
    }
}