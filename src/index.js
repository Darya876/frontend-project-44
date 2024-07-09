import readlineSync from 'readline-sync';

export const random = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

export const condition = (userAnswer, trueAnswer, userName) => {
  if (userAnswer == trueAnswer) {
    console.log('Correct!');
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`,
    );
    console.log(`Let's try again, ${userName}!`);
    process.exit();
  }
};

export const congrats = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};
