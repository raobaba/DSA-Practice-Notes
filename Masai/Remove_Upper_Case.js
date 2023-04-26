let str = "MaSaI";
let N = 5;
removeUppercase(N,str);
function removeUppercase(N, str) {
    //write code here
    var Letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var bag = "";
         for(var i=0;i<str.length;i++){
             for(var j=0;j<Letter.length;j++){
                 if(str[i]==Letter[j]){
                     bag = bag + str[i];
                 }
             }
         }
         console.log(bag);
  }