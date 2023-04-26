let num = 4;
yourFirstNested(num);
function yourFirstNested(num) {
    // Write code here
    for(var a = 1; a<=num;a++)
      {    
          var bag = "";
          for(var b = 1;b<=num;b++)
          {
              bag = bag+b+" ";
          }
          console.log(bag);
      }
}