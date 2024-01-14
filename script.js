
const totalScore = {computerScore: 0, playerScore: 0}

function getComputerChoice() {
  const rpsChoice = ['Rock', 'Paper', 'Scissors']
  const randomNumber = Math.floor(Math.random() * rpsChoice.length)
   return rpsChoice[randomNumber]
}

function getResult(playerChoice, computerChoice) {
  
let score;

    if (playerChoice == computerChoice) {
      score = 0
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
      score = 1
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
      score = 1
    } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
      score = 1
    } else {
      score = -1
    }
  return score
}


function showResult(score, playerChoice, computerChoice) {
  const playerScore = document.getElementById('player-score')
  const hands = document.getElementById('hands')
  const result = document.getElementById('result')
      switch(score){
        case 0: 
          result.innerText = `It's a draw!`
          break
        case 1:
          result.innerText = `You Won!`
          break
        case -1:
          result.innerText = `You Lose!`
          break
      }
  
  playerScore.innerText = `Your Score: ${totalScore['playerScore']}`
  hands.innerText = `🙍 ${playerChoice} vs 💻 ${computerChoice}`
}


function onClickRPS(playerChoice) {
   const computerChoice = getComputerChoice()
   const score = getResult(playerChoice, computerChoice)
   totalScore['playerScore'] += score
   showResult(score, playerChoice, computerChoice)
  
}


function playGame() {
  const rpsButtons = document.querySelectorAll('.rpsButton')
  
  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })
 
  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame(totalScore)
}


function endGame(totalScore) {
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0
  let playerScore = document.getElementById( 'player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}
playGame()