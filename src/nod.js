import * as funcAll from '../src/cli.js'

const findNOD = (num1, num2) => {
  let num3 = 0
  if (num1 < num2) {
    num3 = num2
    num2 = num1
    num1 = num3
  }
  while (num1 % num2 !== 0) {
    num3 = num2
    num2 = num1 % num2
    num1 = num3
  }
  return num2
}

const nod = () => {
  const name = funcAll.Start()
  console.log('Find the greatest common divisor of given numbers.')
  for (let i = 0; i < 3; i += 1) {
    const randNum1 = Math.floor(Math.random() * 100 + 1)
    const randNum2 = Math.floor(Math.random() * 100 + 1)
    console.log(`Question: ${randNum1} ${randNum2}`)
    const res = findNOD(randNum1, randNum2).toString()
    const num = funcAll.Ans(res, name)
    if (num !== 1) {
      return
    }
  }
  funcAll.Victory(name)
}

export default nod
