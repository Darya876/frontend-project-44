import runGame from '../index.js';
import random from '../random.js';

const getGcd = (x, y) => {
  if (y !== 0) {
    const divisor = x % y;
    return getGcd(y, divisor);
  }
  return x;
};

const getRoundData = () => {
  const number1 = random(1, 50);
  const number2 = random(1, 50);
  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2);
  const rightAnswer = answer.toString();
  return [question, rightAnswer];
};

const startGcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  runGame(description, getRoundData);
};

export default startGcdGame;
