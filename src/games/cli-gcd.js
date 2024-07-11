import readlineSync from 'readline-sync';
import {
  random,
  condition,
  congrats,
  nod,
} from '../index.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Find the greatest common divisor of given numbers.');

const x1 = random(1, 50);
const y1 = random(1, 50);
const userAnswer1 = readlineSync.question(
  `Question: ${x1} ${y1} \nYour answer: `,
);
const nod1 = nod(x1, y1);
const trueAnswer1 = nod1;
const truth1 = trueAnswer1.toString();
condition(userAnswer1, truth1, userName);

const x2 = random(1, 50);
const y2 = random(1, 50);
const userAnswer2 = readlineSync.question(
  `Question: ${x2} ${y2} \nYour answer: `,
);
const nod2 = nod(x2, y2);
const trueAnswer2 = nod2;
const truth2 = trueAnswer2.toString();
condition(userAnswer2, truth2, userName);

const x3 = random(1, 50);
const y3 = random(1, 50);
const userAnswer3 = readlineSync.question(
  `Question: ${x3} ${y3} \nYour answer: `,
);
const nod3 = nod(x3, y3);
const trueAnswer3 = nod3;
const truth3 = trueAnswer3.toString();
condition(userAnswer3, truth3, userName);

congrats(userName);

export default nod;
