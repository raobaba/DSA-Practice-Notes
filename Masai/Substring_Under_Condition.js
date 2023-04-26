let s = "abcab";
subStrUnderCond(s);
function subStrUnderCond(s){
    //write code here
             var str = s;
         var count = 0;
         var last = s.length-1;
         for(var i=0;i<=last;i++)
         {
             for(var j=i;j<=last;j++)
             {
                 var bag = "";
                 for(var k=i;k<=j;k++)
                 {
                     bag = bag + str[k];
                 }
                 var x = bag.length-1;
                 if(bag[0]==bag[x])
                 {
                     count++;
                 }
             }
         }
         console.log(count);
    }