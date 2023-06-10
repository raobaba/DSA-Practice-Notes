function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
      let pattern = '';
      for (let j = 1; j <= rows - i; j++) {
        pattern += ' ';
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        pattern += '*';
      }
      console.log(pattern);
    }
  }
  
  // Example usage:
  printPattern(5);
  