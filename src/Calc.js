import * as funcAll from "../src/cli.js";

const numRes = (randNum1, randNum2, operator) => {
  switch (operator) {
    case "+":
      return randNum1 + randNum2;
    case "-":
      return randNum1 - randNum2;
    case "*":
      return randNum1 * randNum2;
  }
};

const calc = () => {
  const name = funcAll.Start();
  console.log("What is the result of the expression?");
  for (let i = 0; i < 3; i += 1) {
    const operators = ["+", "-", "*"];
    const symb = Math.floor(Math.random() * operators.length);
    const randNum1 = Math.floor(Math.random() * 100);
    const randNum2 = Math.floor(Math.random() * 100);
    console.log(`Question: ${randNum1} ${operators[symb]} ${randNum2}`);
    const res = numRes(randNum1, randNum2, operators[symb]).toString();
    const num = funcAll.Ans(res, name);
    if (num !== 1) {
      return;
    }
  }
  funcAll.Victory(name);
};

export default calc;
