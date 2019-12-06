/* eslint-disable import/extensions */
// get the cells and ad event click lisener
import Player from './player.js';
import Board from './board.js';
import Game from './game.js';
import GameUI from './gameui.js';

function playerNameFromDOM() {
  return document.getElementById('player-name').value;
}
const playerOne = Player(playerNameFromDOM(), 'O');
const playerTwo = Player('machine', 'X', 'machine');
const DOMBoardCells = GameUI.getDOMBoardCells();
DOMBoardCells.forEach((cell, position) => {
  cell.addEventListener('click', () => {
    // debugger;
    // run the game here
    const playOutcomeIsGameOver = Game.playTurn(playerOne, position);
    if (playOutcomeIsGameOver) GameUI.renderGameOverBoard(Game.getWinner(), playOutcomeIsGameOver);
    else GameUI.renderDOMBoard(Board.currentState());
  }, { once: true });
});
const disableObjects = () => {
  document.getElementById('start-new-game')
    .setAttribute('disabled', 'disabled');
  document.getElementById('player-name')
    .setAttribute('disabled', 'disabled');
};
const prepareDOMForNewGame = () => {
  document.getElementById('board-section')
    .removeAttribute('class');
  disableObjects();
};
const startNewGame = () => {
  Board.reset();
  Game.init(playerOne, playerTwo, Board);
  GameUI.renderDOMBoard(Board.currentState());
  prepareDOMForNewGame();
};
document.getElementById('start-new-game')
  .addEventListener('click', () => {
    startNewGame();
  }, { once: true });
document.getElementById('play-again')
  .addEventListener('click', () => {
    startNewGame();
  }, { once: true });
window.addEventListener('load', () => {

});
