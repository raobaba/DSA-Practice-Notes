const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the value of a: ', (a) => {
  rl.question('Enter the value of b: ', (b) => {
    rl.question('Enter the operation (+, -, *, /, %): ', (op) => {
      switch (op) {
        case '+':
          console.log(`Result: ${parseInt(a) + parseInt(b)}`);
          break;
        case '-':
          console.log(`Result: ${parseInt(a) - parseInt(b)}`);
          break;
        case '*':
          console.log(`Result: ${parseInt(a) * parseInt(b)}`);
          break;
        case '/':
          if (b !== '0') {
            console.log(`Result: ${parseInt(a) / parseInt(b)}`);
          } else {
            console.log('Error: Division by zero');
          }
          break;
        case '%':
          if (b !== '0') {
            console.log(`Result: ${parseInt(a) % parseInt(b)}`);
          } else {
            console.log('Error: Modulo by zero');
          }
          break;
        default:
          console.log('Error: Please enter a valid operation');
      }

      rl.close();
    });
  });
});
