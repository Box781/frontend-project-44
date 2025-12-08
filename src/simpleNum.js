import * as funcAll from '../src/cli.js'

const isSimple = (num) => {
  if (num === 1) {
    return false
  }
  let x = 0
  for (let i = 2; i < num; i += 1) {
    if (num % i !== 0) {
      continue
    }
    x += 1
  }
  if (x === 0) {
    return true
  }
  return false
}

const Simple = () => {
  const name = funcAll.Start()
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
  for (let i = 0; i < 3; i += 1) {
    const randNum = Math.floor(Math.random() * 100)
    console.log(`Question: ${randNum}`)
    const issimple = isSimple(randNum)
    let res = ''
    if (issimple === true) {
      res = 'yes'
    }
    else {
      res = 'no'
    }
    const num = funcAll.Ans(res, name)
    if (num !== 1) {
      return
    }
  }
  funcAll.Victory(name)
}

export default Simple
