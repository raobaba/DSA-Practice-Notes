let L = 12;
let W = 14;
let length = 8;
let width = 19;
function profilePic(L, W, length, width) {
    //Write code here
    var a = L;
    var b = W;
    var c = length;
    var d = width;
    if(c>a && d>b)
    console.log("Upload");
    else if(c<a)
    console.log("Increase Length");
    else if(d<b)
    console.log("Increase Width");
  }