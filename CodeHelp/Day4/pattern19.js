pattern(5);
function pattern(n) {
    let number = 1;
    for (let row = 1; row <= n; row++) {
      for (let column = 1; column <= row; column++) {
        process.stdout.write(number + " ");
        number++;
      }
      console.log();
    }
  }
  