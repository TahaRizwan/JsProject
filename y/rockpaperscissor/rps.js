const totalScore = { computerScore: 0, playerScore: 0 }

function getComputerChoice() {
  const rpsChoice = ['Rock', 'Paper', 'Scissor']
  const randomChoice = Math.floor(Math.random() * rpsChoice.length)
  return rpsChoice[randomChoice]
}

function getResult(playerChoice, computerChoice) {
  let score
  if (playerChoice === computerChoice) {
    score = 0
  } else if (playerChoice === 'Rock' && computerChoice === 'Scissor') {
    score = 1
  } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
    score = 1
  } else if (playerChoice === 'Scissor' && computerChoice === 'Paper') {
    score = 1
  } else {
    score = -1
  }
  return score
}

function playGame() {
  const rpsButtons = document.querySelectorAll('.rpsButton')
  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })
}

function showResult(score, playerChoice, computerChoice) {
  const handsDiv = document.getElementById('hands')
  const resultDiv = document.getElementById('result')
  const playerScoreDiv = document.getElementById('player-score')

  if (score === -1) {
    resultDiv.innerText = 'You Lose'
  } else if (score === 0) {
    resultDiv.innerText = "It's a tie"
  } else {
    resultDiv.innerText = 'You Win'
  }

  playerScoreDiv.innerText = `Player Score: ${totalScore['playerScore']} Computer Score: ${totalScore['computerScore']}`
  handsDiv.innerText = `Human: ${playerChoice}    Computer:${computerChoice}`
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const result = getResult(playerChoice, computerChoice)
  if (result > 0) {
    totalScore['playerScore'] += result
  } else if (result === -1) {
    totalScore['computerScore'] += 1
  }
  showResult(result, playerChoice, computerChoice)
}

function reset() {
  const handsDiv = document.getElementById('hands')
  const resultDiv = document.getElementById('result')
  const playerScoreDiv = document.getElementById('player-score')
  totalScore['computerScore'] = 0
  totalScore['playerScore'] = 0
  handsDiv.innerText = ' '
  playerScoreDiv.innerText = ' '
  resultDiv.innerText = ' '
}

playGame()
