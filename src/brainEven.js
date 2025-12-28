const getGameRules = () =>
  'Answer "yes" if the number is even, otherwise answer "no".'

const QuestionAndAnswer = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1
  const question = randomNumber
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no'
  return { question, correctAnswer }
}

export { getGameRules, QuestionAndAnswer }
