player - 1 is X and player - 2 is 0;
var totalMovesPlayed = 0;
var playerWins = false;
let player1Score = 0, player2Score = 0;
displayScore(player1Score, player2Score);

do {
  player = getting player whose turn is from whoseTurn();
  displaywhoseTurn(player);
  getting move played by player1 or player2 from getMove(player);
  move = getMove(player);
  applying move played by player in inner html by addPlayersMoveInHtml(move);
  totalMovesPlayed++;
  if (totalMovesPlayed <= 5) {
    if checkifThereIsWinner(player) is true {
      displayResult(player);
     (player1Score, player2Score) =  getPlayersScore(player);
     displayScore(player1Score, player2Score);
      playerWins = true;
      exit the loop
    }
  }
}
while (totalMovesPlayed is not equal to nine and playerwin is false)
if (playerWins == false) {
  displayResult(player, draw);
}
resetGame();
function displaywhoseTurn(player){
  display whose turn is in view
}

function displayResult(player, result) {
  if result is winner {
    display it in html with player
  } else
    display result draw in html
}


function addPlayersMoveInHtml(move) {
  change the innerHTML of square corresponding to move;
  add played class to square corresponding to that move;
}
displayScore(player1Score, player2Score){

}
function resetGame(){
  resetModel();
  resetView();
}
function resetView(){

}
