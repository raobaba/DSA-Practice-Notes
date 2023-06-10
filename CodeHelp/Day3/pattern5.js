function printPattern(n) {
    for (let row = 1; row <= n; row++) {
      let pattern = '';
  
      for (let spaces = 1; spaces <= n - row; spaces++) {
        pattern += '  ';
      }
  
      for (let column = 1; column <= row; column++) {
        pattern += '* ';
      }
  
      console.log(pattern);
    }
  }
  
  // Example usage:
  printPattern(4);
  