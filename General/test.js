let str = ['Nitesh','Rajan','Ujjwal','Muskan',"Dheeraj"];
let ind = [5,3,2,1,4];
str.sort((a, b) => ind[str.indexOf(a)] - ind[str.indexOf(b)]);
console.log(str); // Output: ["ramu", "rajan", "ujjawa"]