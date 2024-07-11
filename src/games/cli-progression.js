import readlineSync from 'readline-sync';
import {
  congrats,
  random,
  condition,
  progression,
} from '../index.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('What number is missing in the progression?');

const start1 = random(1, 15);
const step1 = random(1, 6);
const length1 = random(8, 12);
const progres1 = progression(start1, step1, length1);
const removed1 = progres1.splice(5, 1, '..');
const progression1 = progres1.join(' ');
const userAnswer1 = readlineSync.question(
  `Question: ${progression1} \nYour answer: `,
);
const trueAnswer1 = removed1;
const truth1 = trueAnswer1.join();
condition(userAnswer1, truth1, userName);

const start2 = random(1, 15);
const step2 = random(1, 6);
const length2 = random(8, 12);
const progres2 = progression(start2, step2, length2);
const removed2 = progres2.splice(6, 1, '..');
const progression2 = progres2.join(' ');
const userAnswer2 = readlineSync.question(
  `Question: ${progression2} \nYour answer: `,
);
const trueAnswer2 = removed2;
const truth2 = trueAnswer2.join();
condition(userAnswer2, truth2, userName);

const start3 = random(1, 15);
const step3 = random(1, 6);
const length3 = random(8, 12);
const progres3 = progression(start3, step3, length3);
const removed3 = progres3.splice(7, 1, '..');
const progression3 = progres3.join(' ');
const userAnswer3 = readlineSync.question(
  `Question: ${progression3} \nYour answer: `,
);
const trueAnswer3 = removed3;
const truth3 = trueAnswer3.join();
condition(userAnswer3, truth3, userName);

congrats(userName);

export default progression;
