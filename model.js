const winningCombinations = [
  ["0", "3", "6"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],
  ["0", "4", "8"],
  ["6", "4", "2"]
];
var player1Moves = [];
var player2Moves = [];

var playersMove;

function initialize(){
  playersMove = [0, 1, 2, 3, 4 ,5, 6, 7, 8];
  turn = true ;
}
function whoseTurn(){
  return player1;
  //return numberOfMoves%2 == 0  ? player1: player2;
}

function aMovesisMade(gridNumber, player){

  }
