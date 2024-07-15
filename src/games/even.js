import runGame from '../index.js';
import { random } from '../random.js';

const evenOrNot = (number) => {
  const result = number % 2 === 0;
  return result;
};

const getRoundData = () => {
  const number = random(1, 100);
  const rightAnswer = evenOrNot(number) ? 'yes' : 'no';
  const question = number.toString();
  return [question, rightAnswer];
};

const logicEvenOrNot = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(description, getRoundData);
};

logicEvenOrNot();

export default logicEvenOrNot;
