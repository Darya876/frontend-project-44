import runGame from '../index.js';
import random from '../random.js';

const isPrime = (randomNumber) => {
  if (randomNumber < 2) {
    return false;
  }
  for (let i = 2; i < randomNumber / 2; i += 1) {
    if (randomNumber % i === 0) {
      return false;
    }
  }
  return true;
};

const getRoundData = () => {
  const number = random(1, 100);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  const question = number.toString();
  return [question, rightAnswer];
};

const startPrimeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(description, getRoundData);
};

export default startPrimeGame;
