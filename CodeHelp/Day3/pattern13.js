function printPattern(n) {
    for (let row = 1; row <= n; row++) {
      let pattern = '';
  
      for (let spaces = 1; spaces <= n - row; spaces++) {
        pattern += '  ';
      }
  
      let c = 1;
  
      for (let column = 1; column <= row; column++) {
        pattern += c + '   ';
        c = (c * (row - column)) / column;
      }
  
      console.log(pattern);
    }
  }
  
  // Example usage:
  printPattern(5);
  