import runGame from '../index.js';
import random from '../random.js';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operation: '${operator}'!`);
  }
};

const getRoundData = () => {
  const operations = ['-', '+', '*'];
  const number1 = random(1, 15);
  const number2 = random(1, 15);
  const operationIndex = random(0, operations.length - 1);
  const operator = operations[operationIndex];
  const question = `${number1} ${operator} ${number2}`;
  const rightAnswer = String(calculate(number1, number2, operator));
  return [question, rightAnswer];
};

const startCalcGame = () => {
  const description = 'What is the result of the expression?';
  runGame(description, getRoundData);
};

export default startCalcGame;
