let str = "abcefse";
let N = 7;
vowelHalf(N,str);
function vowelHalf(N, str) {
    //write code here
    var vowel = ['a','e','i','o','u'];
    var n = Math.floor(N/2);
    var count = 0;
    for(var  i=0;i<N;i++){
        for(var j=0;j<vowel.length;j++){
            if(str[i]==vowel[j]){
                count++;
            }
        }
    }
    if(count>n){
        console.log("True");
    }else{
        console.log("False");
    }
  }