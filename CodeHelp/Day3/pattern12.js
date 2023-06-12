function printPattern(n) {
    let inSpace = 2 * n - 1 - 4;
  
    for (let row = 1; row <= n; row++) {
      let pattern = '';
  
      for (let spaces = 1; spaces <= row - 1; spaces++) {
        pattern += ' ';
      }
  
      let totalColumns = row !== n ? 2 : 1;
      if (row === 1) {
        totalColumns = 2 * n - 1;
      }
  
      for (let column = 1; column <= totalColumns; column++) {
        pattern += '*';
  
        if (row >= 2 && row !== n) {
          for (let space = 1; space <= inSpace; space++) {
            pattern += ' ';
          }
          inSpace -= 1;
        }
      }
  
      console.log(pattern);
    }
  }
  
  // Example usage:
  printPattern(5);
  