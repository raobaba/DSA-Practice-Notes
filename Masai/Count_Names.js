//https://oj.masaischool.com/contest/3400/problem/06
function countNames(N,strings){
	//write your code here
	strings.sort();
    //   console.log(str);
       var obj = {};
       for(var i=0;i<strings.length;i++)
       {
           if(obj[strings[i]]===undefined)
           {
               obj[strings[i]]=1;
           }
           else
           {
               obj[strings[i]]++;
           }
       }
       for(var key in obj)
       {
           console.log(key+" "+obj[key]);
       }
}