let n = 5;
let m = 5;
let = matrix = [[s,a,f,e,r],[a,m,j,a,d],[b,a,b,o,l],[a,a,r,o,n],[s,o,n,g,s]];
twoArrayAndPhrase(n, m, matrix)
function twoArrayAndPhrase(n, m, matrix){
    //write code here
 
 var count = 0 ;
 for (var i=0;i<n;i++)
 {
	 for (var j=0;j<m;j++)
	 {
		if (j<m-3)
		{
			 var temp = matrix[i][j] + matrix[i][j+1] + matrix[i][j+2] + matrix[i][j+3] ;
			 if (temp == "saba"){ count++}
		}
		 if (i<n-3)
		 {
			 var temp = matrix[i][j] + matrix[i+1][j] + matrix[i+2][j] + matrix[i+3][j] ;
			if (temp == "saba") {count++}
		 }
		 if (i<n-3 && j<m-3)
		 {
			 var temp = matrix[i][j] + matrix[i+1][j+1] + matrix[i+2][j+2] + matrix[i+3][j+3]; 
			 if (temp == "saba"){ count++}
		 }
		if (i>=3 && j<m-3)
	    {
			 var temp = matrix[i][j] + matrix[i-1][j+1] + matrix[i-2][j+2] + matrix[i-3][j+3] ;
 		 if (temp == "saba"){ count++}
	    }
	 }	 
 }	 
 console.log(count);
  
}