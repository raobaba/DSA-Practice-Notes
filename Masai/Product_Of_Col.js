let N = 3;
let M = 3;
let arr = [[1,2,3],[4,5,6],[7,8,9]];
productOfColumns(N,M,arr);

function productOfColumns(N,M,arr){
    //write code here
    for (i = 0; i < M; i++) 
        {
            var product = 1;
            for (j = 0; j < N; j++) 
            {
                product = product * arr[j][i];
            }
            console.log(product);
        }
  
}