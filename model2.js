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
var turn = true;
function initializeGame(){

}
function getScoreForP1(){
  return player1Score;
}
function getScoreForP2(){
  return player2Score;
}
function whoseTurn(){
if (turn){
  turn = !turn;
  return player1;
}
else
{
  turn = !turn;
  return player2;
}
}
function isMoveAvailable(gridNumber){
  return true if grid is available
}
// function movePlayedAt(gridNumber){
//   if (gridNumber.hasClass('played')){
//     return false
//   }
//   else {
//     return true;
//     }
// }
