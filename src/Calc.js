const getGameRules = () => 'What is the result of the expression?'

const QuestionAndAnswer = () => {
  const operators = ['+', '-', '*']
  const symb = Math.floor(Math.random() * operators.length)
  const randNum1 = Math.floor(Math.random() * 100)
  const randNum2 = Math.floor(Math.random() * 100)
  const question = `${randNum1} ${operators[symb]} ${randNum2}`
  let correctAnswer = 0
  switch (symb) {
    case 0:
      correctAnswer = randNum1 + randNum2
      break
    case 1:
      correctAnswer = randNum1 - randNum2
      break
    case 2:
      correctAnswer = randNum1 * randNum2
  }
  return {question, correctAnswer}
}

export { getGameRules, QuestionAndAnswer }
