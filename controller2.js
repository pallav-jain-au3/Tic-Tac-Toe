function initializeGame(){
  initializeModel();
  displayScore(getScoreForP1(), getScoreForP2())
  startGame();
}

function startGame() {
  // attach events celltapped
  let squares = document.querySelectorAll('.square');
  squares.forEach(sqaure => square.addEventlistner('click', cellTapped));

  }
}


func cellTapped(event) {
  let gridNumber = event.target.id;
  if (isMoveAvailable(gridNumber)){
  removeListnerFrom(gridNumber);
  let playerSymbolClass = getPlayerSymbolClass();
  addClassToCell(gridNumber, playerSymbolClass);
  aMoveIsMade()}
}

function aMoveIsMade() {
  if(gameEnded()) {
    if(aPlayerWon()){
        let winningMoves = getWinningMoves(); //0, 1, 2
        markWinningCells(winningMoves);
    }
    displayGameResult();
    displayScore(getPlayer1(), getPlayer2());
    endGame(); // reset game properties
  } else {
    nextMove();
  }
}

function nextMove() {
  if(turnForComputer()) {
    makeGameUniteractible();
    const bestMove = getBestMove();
    let playerSymbolClass = getPlayerSymbolClass();
    addClassToCell(gridNumber, playerSymbolClass);
    aMoveIsMade()
  }
}

function endGame() {
  // maybe ask player if he wants to play another game
  removeAllMovesFromDisplay();
  resetGameMovesFromModel();
}

function displayScore(scoreForP1, scoreForP2){  }
function displayMove(gridNumber){

}
