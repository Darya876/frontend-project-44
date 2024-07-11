import readlineSync from 'readline-sync';
import {
  congrats,
  random,
  condition,
  primeOrNot,
} from '../index.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const number1 = random(2, 50);
const userAnswer1 = readlineSync.question(
  `Question: ${number1} \nYour answer: `,
);
const trueAnswer1 = primeOrNot(number1);
const truth1 = trueAnswer1;
condition(userAnswer1, truth1, userName);

const number2 = random(2, 50);
const userAnswer2 = readlineSync.question(
  `Question: ${number2} \nYour answer: `,
);
const trueAnswer2 = primeOrNot(number2);
const truth2 = trueAnswer2;
condition(userAnswer2, truth2, userName);

const number3 = random(2, 50);
const userAnswer3 = readlineSync.question(
  `Question: ${number3} \nYour answer: `,
);
const trueAnswer3 = primeOrNot(number3);
const truth3 = trueAnswer3;
condition(userAnswer3, truth3, userName);

congrats(userName);

export default primeOrNot;
