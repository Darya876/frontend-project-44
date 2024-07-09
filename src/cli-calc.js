import readlineSync from 'readline-sync';
import { congrats, random, condition } from './index.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?');

const number1 = random(1, 50);
const number2 = random(1, 50);
const userAnswer1 = readlineSync.question(
  `Question: ${number1} + ${number2} \nYour answer: `,
);
const sumOfNums = number1 + number2;
const trueAnswer1 = sumOfNums;
condition(userAnswer1, trueAnswer1, userName);

const number3 = random(1, 50);
const number4 = random(1, 50);
const userAnswer2 = readlineSync.question(
  `Question: ${number3} - ${number4} \nYour answer: `,
);
const trueAnswer2 = number3 - number4;
condition(userAnswer2, trueAnswer2, userName);

const number5 = random(1, 50);
const number6 = random(1, 50);
const userAnswer3 = readlineSync.question(
  `Question: ${number5} * ${number6} \nYour answer: `,
);
const trueAnswer3 = number5 * number6;
condition(userAnswer3, trueAnswer3, userName);

congrats(userName);

export default number1;
