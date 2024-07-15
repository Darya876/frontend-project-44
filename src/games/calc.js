import runGame from '../index.js';
import { random } from '../random.js';

const sumOfNums = (num1, num2) => num1 + num2;

const diffOfNums = (num1, num2) => num1 - num2;

const multyplOfNums = (num1, num2) => num1 * num2;

const getRandomOperator = (max) => Math.floor(Math.random() * max);

const getRoundData = () => {
  const operations = ['+', '-', '*'];
  const number1 = random(1, 15);
  const number2 = random(1, 15);
  const operator = operations[getRandomOperator(3)];
  const question = `${number1} ${operator} ${number2}`;
  let result = 0;
  if (operator === '+') {
    result = sumOfNums(number1, number2);
  } else if (operator === '-') {
    result = diffOfNums(number1, number2);
  } else if (operator === '*') {
    result = multyplOfNums(number1, number2);
  }
  const rightAnswer = result.toString();
  return [question, rightAnswer];
};

const logicCalc = () => {
  const description = 'What is the result of the expression?';
  runGame(description, getRoundData);
};

logicCalc();

export default logicCalc;
