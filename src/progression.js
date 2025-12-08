import * as funcAll from "../src/cli.js";

const Progression = () => {
  const name = funcAll.Start();
  console.log("What number is missing in the progression?");
  for (let i = 0; i < 3; i += 1) {
    const randNumStart = Math.floor(Math.random() * 100);
    const randNumSum = Math.floor(Math.random() * 10 + 1);
    const arr = [];
    let strProgression = `${randNumStart}`;
    const numPlace = Math.floor(Math.random() * 10);
    let rightAns = 0;
    let curNum = randNumStart;
    for (let i = 0; i < 10; i += 1) {
      curNum = curNum + randNumSum;
      arr.push(curNum);
      if (numPlace === i) {
        rightAns = arr[i];
        arr[i] = "..";
      }
      strProgression = strProgression + " " + arr[i];
    }
    console.log("Question: " + strProgression);
    const num = funcAll.Ans(rightAns.toString(), name);
    if (num !== 1) {
      return;
    }
  }
  funcAll.Victory(name);
};

export default Progression;
