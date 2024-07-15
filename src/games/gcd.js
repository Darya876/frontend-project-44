import runGame from '../index.js';
import { random } from '../random.js';

const nod = (x, y) => {
  if (y !== 0) {
    const divisor = x % y;
    return nod(y, divisor);
  }
  return x;
};

const getRoundData = () => {
  const number1 = random(1, 50);
  const number2 = random(1, 50);
  const question = `${number1} ${number2}`;
  const answer = nod(number1, number2);
  const rightAnswer = answer.toString();
  return [question, rightAnswer];
};

const logicNod = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  runGame(description, getRoundData);
};

logicNod();

export default logicNod;
