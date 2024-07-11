import readlineSync from 'readline-sync';
import {
  random,
  condition,
  congrats,
  evenOrNot,
} from '../index.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const number1 = random(1, 100);
const answer1 = readlineSync.question(`Question: ${number1} \nYour answer: `);
const userAnswer1 = answer1.toLowerCase();
const trueAnswer1 = evenOrNot(number1);
const truth1 = trueAnswer1;
condition(userAnswer1, truth1, userName);

const number2 = random(1, 100);
const answer2 = readlineSync.question(`Question: ${number2} \nYour answer: `);
const userAnswer2 = answer2.toLowerCase();
const trueAnswer2 = evenOrNot(number2);
const truth2 = trueAnswer2;
condition(userAnswer2, truth2, userName);

const number3 = random(1, 100);
const answer3 = readlineSync.question(`Question: ${number3} \nYour answer: `);
const userAnswer3 = answer3.toLowerCase();
const trueAnswer3 = evenOrNot(number3);
const truth3 = trueAnswer3;
condition(userAnswer3, truth3, userName);

congrats(userName);

export default evenOrNot;
