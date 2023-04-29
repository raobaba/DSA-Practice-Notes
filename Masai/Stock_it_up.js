//https://oj.masaischool.com/contest/5379/problem/01


function stockItUp(N,elements){
    arr=[550,240,84,159,80,160,252];
    sum=0;
   
    for(i=0;i<elements.length;i++){
        if(elements[i]===0){
          
        }
         if(elements[i]==1){
            sum+=arr[i];
        }
    }
    console.log(N*sum);
  }


