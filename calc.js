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
