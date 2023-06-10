function printPattern(rows) {
    for (let i = 0; i < rows; i++) {
      let pattern = '';
      for (let j = 0; j < 7; j++) {
        pattern += '*';
      }
      console.log(pattern);
    }
  }
  
  // Example usage:
  printPattern(3);
  