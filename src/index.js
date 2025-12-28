import readlineSync from 'readline-sync'

const Game = (gameRules, QuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log(gameRules)
  let correctAnswersCount = 0
  while (correctAnswersCount < 3) {
    const { question, correctAnswer } = QuestionAndAnswer()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')
    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!')
      correctAnswersCount++
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}

export default Game
