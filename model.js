var player1Moves = [];
var player2Moves = [];
var winningCombinations = [
  ["0", "3", "6"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],
  ["0", "4", "8"],
  ["6", "4", "2"]
];
var totalMovesPlayed;

function whoseTurn(turn) {
  if (turn == true){
    return player1;
  }
  else{
    return player2;
  }
}

function gettingMove(player) {
  if (player == player1)
  {
    we will listen for click by adding eventlistner
    after clicking we will get move
    move = e.value;
    check for move available from isMoveAvailable(move);
    if isMoveAvailable returns true{
       we will push move in player1Moves;
       increment totalMovesPlayed;
       return move
     }
        else {
          gettingMove(player1);
        }
  }
  else {
    move = getBestMove();
    if(isMoveAvailable(move)){
      push move in players2 move
      increment totalMovesPlayed
      return move;
    }
    else{
      gettingMove(player2)
    }
  }
  }

function isMoveAvailable(move) {
  it check for move available by checking classes of div element and if does not have class played then only it will return true else it will return false
}
function getBestMove(){

}
function addPlayersMoveInHtml(move){
  change the innerHTML of square corresponding to move;
add played class to square corresponding to that move;
 }
function checkifThereIsWinner(player){
  compare the array of current player with winningCombinations
  if (there is winner){
    return true;
  }
}
 function displayResult(player, result){
   if result is winner{
     display it in html with player
   }
else
   display result draw in html
 }
