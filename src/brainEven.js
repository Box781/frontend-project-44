import * as funcAll from '../src/cli.js'

const IsEven = (randNum) => {
  if (randNum % 2 === 0) {
    return 'yes'
  } else {
    return 'no'
  }
}

const brainEven = () => {
  const name = funcAll.Start()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  for (let i = 0; i < 3; i += 1) {
    const randNum = Math.floor(Math.random() * 100)
    console.log('Question: ' + randNum)
    const res = IsEven(randNum)
    const num = funcAll.Ans(res, name)
    if (num !== 1) {
      return
    }
  }
  funcAll.Victory(name)
}

export default brainEven
