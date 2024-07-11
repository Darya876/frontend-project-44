export const random = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

export const sumOfNums = (num1, num2) => num1 + num2;

export const diffOfNums = (num1, num2) => num1 - num2;

export const multyplOfNums = (num1, num2) => num1 * num2;

export const evenOrNot = (randomNumber) => {
  let trueAnswer = '';
  if (randomNumber % 2 === 0) {
    trueAnswer = 'yes';
  } else {
    trueAnswer = 'no';
  }
  return trueAnswer;
};

export const nod = (x, y) => {
  if (y !== 0) {
    const divisor = x % y;
    return nod(y, divisor);
  }
  return x;
};

export const primeOrNot = (randomNumber) => {
  let trueAnswer = '';
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      trueAnswer = 'no';
      break;
    } else {
      trueAnswer = 'yes';
    }
  }
  return trueAnswer;
};

export const progression = (start, step, length) => {
  const result = [];
  for (let i = 0; i <= length; i += 1) {
    result.push(start + step * i);
  }
  return result;
};

export const condition = (userAnswer, truth, userName) => {
  if (userAnswer === truth) {
    console.log('Correct!');
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${truth}'.`,
    );
    console.log(`Let's try again, ${userName}!`);
    process.exit();
  }
};

export const congrats = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};
