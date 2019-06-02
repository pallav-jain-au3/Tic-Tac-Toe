const squares = document.querySelectorAll('.square');
function initialize(){
  initializeModel();
  initializeView();
  startGame();
}
function initializeModel(){
  turn = true;
}
function initializeView(){
  squares.forEach(square => square.classList.add('notClicked'));
  squares.forEach(square => square.innerHTML = "");
}
function startGame(){
  player = whoseTurn();
  displayTurn(player);
  let cells = document.querySelectorAll('.notClicked');
  cells.forEach(cell => cell.addEventListener('click', cellTapped));
}


function cellTapped(e){
gridNumber = e.target.id;
 console.log(gridNumber);
displaySymbolInCell(gridNumber);
removeListener(gridNumber);

}
function removeListener(gridNumber){
  let square = document.getElementById(gridNumber);
  console.log(square);
  square.removeEventListener('click', function (){
    console.log("removed");
  })
}
function displaySymbolInCell(gridNumber){
  document.getElementById(gridNumber).innerHTML = "x";
}
function whoseTurn(){}

function displayTurn(player){
  document.querySelector('.whose-turn h1').innerHTML = player;
}

initialize();
