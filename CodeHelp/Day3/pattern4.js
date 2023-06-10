function printPattern(rows) {
    const middleRow = Math.ceil(rows / 2);
    for (let i = 1; i <= rows; i++) {
      let pattern = '';
      const maxNumbers = i <= middleRow ? i : rows - i + middleRow;
      for (let j = 1; j <= maxNumbers; j++) {
        pattern += j + ' ';
      }
      console.log(pattern.trim());
    }
  }
  printPattern(5);
  