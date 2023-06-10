function printPattern(n) {
    for (let row = 1; row <= n; row++) {
      let pattern = '';
  
      for (let spaces = 1; spaces <= row - 1; spaces++) {
        pattern += '  ';
      }
  
      for (let column = 1; column <= n - row + 1; column++) {
        pattern += '*   ';
      }
  
      console.log(pattern);
    }
  }
  
  // Example usage:
  printPattern(4);
  