// var player1Moves = [];
// var player2Moves = [];
// var winningCombinations = [
//   ["0", "3", "6"],
//   ["1", "4", "7"],
//   ["2", "5", "8"],
//   ["0", "1", "2"],
//   ["3", "4", "5"],
//   ["6", "7", "8"],
//   ["0", "4", "8"],
//   ["6", "4", "2"]
// ];
// var turn = true;
// let player1Score = 0;
// let player2Score = 0;
//
//
// function whoseTurn() {
//   if (turn == true) {
//     turn = !turn;
//     return player1;
//   } else {
//     turn = !turn;
//     return player2;
//   }
// }
//
// function gettingMove(player) {
//   if (player == player1) {
//     we will listen
//     for click by adding eventlistner
//     after clicking we will get move
//     move = e.value;
//     check
//     for move available from isMoveAvailable(move);
//     if isMoveAvailable returns true {
//       we will push move in player1Moves;
//       return move
//     } else {
//       gettingMove(player1);
//     }
//   } else {
//     move = getBestMove();
//     if (isMoveAvailable(move)) {
//       push move in players2 move
//       return move;
//     } else {
//       gettingMove(player2)
//     }
//   }
// }
//
// function isMoveAvailable(move) {
//   it check
//   for move available by checking classes of div element and
//   if does not have class played then only it will
//   return true
//   else it will
//   return false
// }
//
// function getBestMove() {
//
// }
// function  getPlayersScore(player){
//
//     if player = player1{
//       player1Score += 1;
//     }
//     else{
//       player2Score += 1;
//     }
//     return player1Score, player2Score;
// }
//
//
// function checkifThereIsWinner(player) {
//   compare the array of current player with winningCombinations
//   if (there is winner) {
//     return true;
//   }
// }
// function resetModel(){
//
// }
