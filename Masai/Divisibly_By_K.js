let num = 7;
let k = 2;
divisibleByKII(num,k);

function divisibleByKII(num,k) {
    //write code here
    var sum = 0;
    for(var i = 1; i<=num; i++)
          if(i%k==0)
             {
                 sum = sum + i;
             }
             console.log(sum);
}