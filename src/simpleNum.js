const getGameRules = () =>
  'Answer "yes" if given number is prime. Otherwise answer "no".'

const QuestionAndAnswer = () => {
  const randNum = Math.floor(Math.random() * 100)
  const question = `${randNum}`
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
  const issimple = isSimple(randNum)
  let correctAnswer = ''
  if (issimple === true) {
    correctAnswer = 'yes'
  }
  else {
    correctAnswer = 'no'
  }
  return { question, correctAnswer }
}

export { getGameRules, QuestionAndAnswer }
