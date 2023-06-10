function printPattern(n) {
    let inSpace = 1;
    let inBelowSpace = 2 * n - 5;
  
    for (let row = 1; row <= 2 * n - 1; row++) {
      let totalColumns = 1;
  
      if (row !== 1 && row !== 2 * n - 1) {
        totalColumns = 2;
      }
  
      let totalSpaces = row > n ? row - n : n - row;
  
      let pattern = '';
  
      for (let space = 1; space <= totalSpaces; space++) {
        pattern += ' ';
      }
  
      for (let column = 1; column <= totalColumns; column++) {
        pattern += '*';
  
        if (row > 1 && row <= n) {
          for (let space = 1; space <= inSpace; space++) {
            pattern += ' ';
          }
          inSpace += 1;
        }
  
        if (row > n) {
          for (let space = 1; space <= inBelowSpace; space++) {
            pattern += ' ';
          }
          inBelowSpace--;
        }
      }
  
      console.log(pattern);
    }
  }
  
  // Example usage:
  printPattern(5);
  