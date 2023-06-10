function printPattern(rows) {
    for (let i = rows; i >= 1; i--) {
      let pattern = '';
      for (let j = rows; j > i; j--) {
        pattern += ' ';
      }
      for (let k = 1; k <= i; k++) {
        pattern += '*';
      }
      console.log(pattern);
    }
  }
  
  // Example usage:
  printPattern(5);
  