let [N,price,quantity] = [3,100,1];
cartTotal(N,price,quantity)
function cartTotal(N, price, quantity) {
    var sum=0;
   for(var i=0;i<price.length;i++)
   {
       sum+=price[i]*quantity[i];
   }
   console.log(sum);
}