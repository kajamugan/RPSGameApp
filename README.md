# RPSGameApp
This is a RPS Game application with code uses JavaScript functions and DOM manipulation to create an interactive game.
1. Variables and Data:

totalScore: An object to track scores, initially set to { computerScore: 0, playerScore: 0 }.
rpsChoices: An array containing the possible choices: Rock, Paper, and Scissors.
2. Functions:

getComputerChoice():
Generates a random choice for the computer from the rpsChoices array.
getResult(playerChoice, computerChoice):
Determines the game's outcome based on the player's and computer's choices:
Returns 0 for a draw.
Returns 1 if the player wins.
Returns -1 if the player loses.
showResult(score, playerChoice, computerChoice):
Updates the HTML elements to display scores, choices, and the result of the round.
onClickRPS(playerChoice):
Gets the computer's choice.
Calculates the result using getResult().
Updates the player's score.
Displays the results using showResult().
playGame():
Attaches click events to the Rock, Paper, and Scissors buttons, calling onClickRPS() with the button's value.
Attaches a click event to the "End Game" button, calling endGame().
endGame(totalScore):
Resets the scores to 0.
Clears the HTML elements displaying scores, choices, and results.
3. Game Flow:

The playGame() function starts the game.
When a player clicks a choice button:
The onClickRPS() function handles the player's choice.
The computer's choice is generated.
The outcome is determined.
Scores are updated.
Results are displayed.
When the "End Game" button is clicked:
The endGame() function resets the game.
