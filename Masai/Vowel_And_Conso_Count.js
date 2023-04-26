let str = "Rajan";
let N = 5;
vowelAndConsonantCount(N,str);

function vowelAndConsonantCount(N, str) {
    //write code here
      
            var count1 = 0;
         var count2 = 0;
         for(var i=0;i<=N-1;i++)
         {
             if(str[i]=="a"|| str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u")
             {
                count1++;
                 
             } 
             else
             {
                count2++;
                 
             }
             
         } 
         console.log(count1,count2);
         
         
    
  }