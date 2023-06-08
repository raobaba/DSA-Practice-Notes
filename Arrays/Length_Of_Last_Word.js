let s = 'Hello World';
let res = LengthOfLastWord(s);


function LengthOfLastWord(s){
    let [...length] = s.trim().split(' ');
    let find = length[length.length-1];
    console.log(find.length);
}