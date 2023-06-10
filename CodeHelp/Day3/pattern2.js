// Pattern 4
function printPattern(noOfRows) {
    for (let row = 1; row <= noOfRows; row++) {
      let pattern = '';
  
      for (let column = 1; column <= row; column++) {
        pattern += column + ' ';
      }
  
      console.log(pattern);
    }
  }
  
  // Example usage:
  printPattern(4);
  
  