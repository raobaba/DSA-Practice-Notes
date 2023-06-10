function printPattern(rows) {
    const totalRows = 2 * rows - 1;
    const middleRow = Math.ceil(totalRows / 2);
  
    for (let i = 1; i <= totalRows; i++) {
      let pattern = '';
  
      if (i <= middleRow) {
        for (let j = 1; j <= i - 1; j++) {
          pattern += ' ';
        }
        for (let k = 1; k <= rows - i + 1; k++) {
          pattern += '* ';
        }
      } else {
        for (let j = 1; j <= totalRows - i; j++) {
          pattern += ' ';
        }
        for (let k = 1; k <= i - middleRow + 1; k++) {
          pattern += '* ';
        }
      }
  
      console.log(pattern);
    }
  }
  
  // Example usage:
  printPattern(5);
  