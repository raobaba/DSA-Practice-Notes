let matrix = [[1,2,3],[4,5,6],[6,7,8]];
nTraversal(matrix);

function nTraversal(matrix) {
  
    var bag = "";
    n = matrix.length;
    for (var i = n-1;i>=0;i--) {
        bag = bag + matrix[i][0]+" ";
    }
    for (var i = 1;i<n;i++){
        bag = bag + matrix[i][i]+" ";
    }
    for (var i = n-2;i>=0;i--){
         bag = bag + matrix[i][n-1]+" ";
    }
    
    console.log(bag);
    

}