//https://oj.masaischool.com/contest/3437/problem/04

function generateALlSubstr(N,A){
    //write code here
      var arr = A.split("");
      for(var i=0;i<arr.length;i++)
      {
          for(var j=i;j<arr.length;j++)
          {
              var bag = "";
              for(var k=i;k<=j;k++)
            {
                bag = bag + arr[k];
            }
            console.log(bag);
          }
      }
      
  }