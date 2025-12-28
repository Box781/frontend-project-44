const getGameRules = () => 'What number is missing in the progression?'

const QuestionAndAnswer = () => {
  const randNumStart = Math.floor(Math.random() * 100)
  const randNumSum = Math.floor(Math.random() * 10 + 1)
  const arr = []
  let strProgression = `${randNumStart}`
  const numPlace = Math.floor(Math.random() * 10)
  let correctAnswer = 0
  let curNum = randNumStart
  for (let i = 0; i < 10; i += 1) {
    curNum = curNum + randNumSum
    arr.push(curNum)
    if (numPlace === i) {
      correctAnswer = arr[i]
      arr[i] = '..'
    }
    strProgression = strProgression + ' ' + arr[i]
  }
  const question = strProgression
  return { question, correctAnswer }
}

export { getGameRules, QuestionAndAnswer }
