const getGameRules = () => 'Find the greatest common divisor of given numbers.'

const QuestionAndAnswer = () => {
  let num1 = Math.floor(Math.random() * 100 + 1)
  let num2 = Math.floor(Math.random() * 100 + 1)
  const question = `${num1} ${num2}`
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
  const correctAnswer = num2
  return { question, correctAnswer }
}

export { getGameRules, QuestionAndAnswer }
