function printPattern(n) {
    let odd = 1;
  
    for (let row = 1; row <= n; row++) {
      let pattern = '';
  
      for (let spaces = 1; spaces <= row - 1; spaces++) {
        pattern += '  ';
      }
  
      for (let column = 1; column <= 2 * n - odd; column++) {
        pattern += '* ';
      }
  
      odd += 2;
      console.log(pattern);
    }
  }
  
  // Example usage:
  printPattern(4);
  