import readlineSync from 'readline-sync'

const Start = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log('Hello, ' + name + '!')
  return name
}

const Ans = (res, name) => {
  const answer = readlineSync.question('Your answer: ')
  if (answer === res) {
    console.log('Correct!')
    return 1
  }
  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${res}'.
Let's try again, ${name}!`)
    return 2
  }
}

const Victory = (name) => {
  console.log(`Congratulations, ${name}!`)
}

export { Start, Ans, Victory }
