// #!/usr/bin/env node

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What is your question? ', (input) => {
//   const regex = /^What is (\d+) (plus|minus|times|divided by) (\d+)\?$/;
//   const match = input.match(regex);

//   if (match) {
//     const num1 = parseInt(match[1]);
//     const operator = match[2];
//     const num2 = parseInt(match[3]);

//     let result;

//     switch (operator) {
//       case 'plus':
//         result = num1 + num2;
//         break;
//       case 'minus':
//         result = num1 - num2;
//         break;
//       case 'times':
//         result = num1 * num2;
//         break;
//       case 'divided by':
//         result = num1 / num2;
//         break;
//       default:
//         console.log('Invalid operator');
//         rl.close();
//         return;
//     }

//     console.log(`${num1} ${operator} ${num2} is ${result}`);
//     rl.close();
//   } else {
//     console.log('Invalid input');
//     rl.close();
//   }
// });


// #!/usr/bin/env node

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your question? ', (question) => {
  const operation = question.match(/plus|minus|multiplied by|divided by/gi)[0];
  const operands = question.split(operation)[0].trim().split(' ');
  const firstOperand = Number(operands[operands.length - 1]);
  const secondOperand = Number(question.split(operation)[1].trim().split(' ')[0]);
  let result;

  switch (operation) {
    case 'plus':
      result = firstOperand + secondOperand;
      break;
    case 'minus':
      result = firstOperand - secondOperand;
      break;
    case 'multiplied by':
      result = firstOperand * secondOperand;
      break;
    case 'divided by':
      result = firstOperand / secondOperand;
      break;
    default:
      console.error('Invalid operation.');
      rl.close();
      return;
  }

  console.log(`${firstOperand} ${operation} ${secondOperand} is ${result}.`);
  console.log();
  rl.close();
});
