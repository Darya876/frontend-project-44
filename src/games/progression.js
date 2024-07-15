import runGame from '../index.js';
import { random } from '../random.js';

const progression = (start, step, length) => {
  const result = [];
  for (let i = 0; i <= length; i += 1) {
    result.push(start + step * i);
  }
  return result;
};

const getRoundData = () => {
  const start = random(1, 15);
  const step = random(1, 6);
  const length = random(8, 12);
  const progres = progression(start, step, length);
  const removed = progres.splice(5, 1, '..');
  const question = progres.join(' ');
  const rightAnswer = removed.toString();
  return [question, rightAnswer];
};

const logicProgression = () => {
  const description = 'What number is missing in the progression?';
  runGame(description, getRoundData);
};

logicProgression();

export default logicProgression;
