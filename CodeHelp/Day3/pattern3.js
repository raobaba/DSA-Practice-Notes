function printPattern(rows) {
    const middleRow = Math.ceil(rows / 2);
  
    for (let i = 1; i <= rows; i++) {
      let pattern = '';
      const maxStars = i <= middleRow ? i : rows - i + 1;
  
      for (let j = 1; j <= maxStars; j++) {
        pattern += '* ';
      }
      
      console.log(pattern.trim());
    }
  }
  
  // Example usage:
  printPattern(5);
  