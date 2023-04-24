let left = 1;
let right = 10;
let k = 3;
masaiDivisors(left,right,k);

function masaiDivisors(left, right, k) {
    //write code here
      var count = 0;
      for(var i = left; i <= right; i++)
      {
              if(i%k===0)
              {
                    count++;
              }
             
      }
       console.log(count); 
}