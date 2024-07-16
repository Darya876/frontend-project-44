import runGame from '../index.js';
import random from '../random.js';

const isEven = (number) => number % 2 === 0;

const getRoundData = () => {
  const number = random(1, 100);
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  const question = number.toString();
  return [question, rightAnswer];
};

const startEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(description, getRoundData);
};

export default startEvenGame;
