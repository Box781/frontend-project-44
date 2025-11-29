import App from "../src/cli.js";
import readlineSync from "readline-sync";

const IsEven = () => {
  let randNum = Math.floor(Math.random() * 100);
  console.log("Question: " + randNum);
  if (randNum % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const ans = (name) => {
  const bool = IsEven();
  const answer = readlineSync.question("Your answer: ");
  if (
    (answer === "yes" && bool === true) ||
    (answer === "no" && bool === false)
  ) {
    console.log("Correct!");
    return 1;
  } else if (bool === true) {
    console.log(
      "'" +
        answer +
        "' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, " +
        name
    );
    return 3;
  } else {
    console.log(
      "'" +
        answer +
        "' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, " +
        name
    );
    return 2;
  }
};

const brainEven = () => {
  const name = App();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const num = ans(name);
  if (num !== 1) {
    return;
  }
  const num2 = ans(name);
  if (num2 !== 1) {
    return;
  }
  const num3 = ans(name);
  if (num3 !== 1) {
    return;
  }
  return console.log("Congratulations, " + name + "!");
};

export default brainEven;
