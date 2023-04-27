let R = 3;
let C = 3;
let matrix = [[1,2,3],[4,5,6],[7,8,9]];
let K = 5;
specificDiagonals(R,C,matrix,K);

function specificDiagonals(R, C, matrix, K){
    //write code here
  for (i=0;i<R;i++){
      for(j=0;j<C;j++){
          if (matrix [i][j]==K){
              row=i;
              col=j;
          }
      }
  }
  
let diff = row-col;
let left_diagonal = "";
for (i=0;i<R;i++){
      for(j=0;j<C;j++){
          if ( i -j ==diff){
              left_diagonal+=matrix[i][j] + " ";
          }
      }
}
let add = row + col 
let right_diagnonal= "";
for (i=0;i<R;i++){
      for(j=0;j<C;j++){
          if ( i+j ==add){
              right_diagnonal+=matrix[i][j] + " ";
          }
      }
}console.log(left_diagonal)
console.log(right_diagnonal)
  
}