let [a,b,c] = [3,4,6];
secondMaximum(a,b,c);
function secondMaximum(a, b, c) {
    // write code here
         if(a>b&&a<c || a<b&&a>c)
            {
               console.log(a);
            }
            else if(b>a&&b<c || b<a&&b>c)
            {
                console.log(b);
            }
            else
            {
                console.log(c);
            }
  }