function printPattern(n) {
    for (let row = 0; row < 2 * n; row++) {
      let totalColsInRow = row > n ? 2 * n - row : row;
      let pattern = '';
  
      for (let column = 0; column < totalColsInRow; column++) {
        pattern += '* ';
      }
  
      console.log(pattern);
    }
  }
  
  // Example usage:
  printPattern(4);
  