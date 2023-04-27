let N = 3;
let M = 3;
let arr = [[1,2,3],[4,5,6],[7,8,9]];
evenSumRows(N,M,arr);
function evenSumRows(N,M,arr){
    //write code here
    for(var i=0;i<N;i++)
    {
        var sum = 0;
        for(var j=0;j<M;j++)
        {
            if(arr[i][j]%2===0)
            {
                sum = sum +arr[i][j];
            }
        }
        console.log(sum);
    }
}