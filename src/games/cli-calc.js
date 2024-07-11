import readlineSync from 'readline-sync';
import {
  congrats,
  random,
  condition,
  sumOfNums,
  diffOfNums,
  multyplOfNums,
} from '../index.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?');

const number1 = random(1, 50);
const number2 = random(1, 50);
const userAnswer1 = readlineSync.question(
  `Question: ${number1} + ${number2} \nYour answer: `,
);
const trueAnswer1 = sumOfNums(number1, number2);
const truth1 = trueAnswer1.toString();
condition(userAnswer1, truth1, userName);

const number3 = random(1, 50);
const number4 = random(1, 50);
const userAnswer2 = readlineSync.question(
  `Question: ${number3} - ${number4} \nYour answer: `,
);
const trueAnswer2 = diffOfNums(number3, number4);
const truth2 = trueAnswer2.toString();
condition(userAnswer2, truth2, userName);

const number5 = random(1, 10);
const number6 = random(1, 10);
const userAnswer3 = readlineSync.question(
  `Question: ${number5} * ${number6} \nYour answer: `,
);
const trueAnswer3 = multyplOfNums(number5, number6);
const truth3 = trueAnswer3.toString();
condition(userAnswer3, truth3, userName);

congrats(userName);

export default sumOfNums;
