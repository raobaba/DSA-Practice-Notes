printPattern(5);
function printPattern(noOfRows) {
    for (let row = 1; row <= noOfRows; row++) {
      for (let column = noOfRows; column >= row; column--) {
        process.stdout.write("*");
      }
      console.log();
    }
  }
  
  const noOfRows = 5; // Replace 5 with the desired number of rows
  printPattern(noOfRows);
  