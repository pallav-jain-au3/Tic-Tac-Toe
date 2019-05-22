

player-1 is X and player-2 is 0;
var totalMovesPlayed = 0;
var playerWins = false;
var turn = true;
do {
player = getting player whose turn is from whoseTurn(turn);
turn = !turn;
getting move played by player1 or player2  from getMove(player);
move = getMove(player);
applying move played by player in inner html by addPlayersMoveInHtml(move);
totalMovesPlayed ++;
if (totalMovesPlayed <= 5){
  if checkifThereIsWinner(player) is true{
    displayResult(player,wins)
    playerWins = true;
    exit the loop
  }
}
}
while(totalMovesPlayed is not equal to nine and playerwin is false)
if (playerWins == false){
  displayResult(player,draw);
}
