/* eslint-disable import/extensions */
// get the cells and ad event click lisener
import Player from './player.js';
import Board from './board.js';
import Game from './game.js';
import GameUI from './gameui.js';

let playerOne;
let playerTwo;
const DOMBoardCells = GameUI.getDOMBoardCells();

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
  const humanName = document.getElementById('player-name').value;
  playerOne = Player(humanName, 'O');
  playerTwo = Player('machine', 'X');
  Game.init(playerOne, playerTwo, Board);
  GameUI.renderDOMBoard(Board.currentState());
  prepareDOMForNewGame();
};

document.getElementById('start-new-game')
  .addEventListener('click', () => {
    startNewGame();
  }, { once: true });

DOMBoardCells.forEach((cell, position) => {
  cell.addEventListener('click', () => {
    const playOutcomeIsGameOver = Game.playTurn(playerOne, position);
    if (playOutcomeIsGameOver) {
      const gameWinner = Game.getWinner();
      const won = gameWinner === null ? 0 : 1;
      GameUI
        .renderGameOverBoard(gameWinner.getName(), Board.currentState(), won);
    } else GameUI.renderDOMBoard(Board.currentState());
  }, { once: true });
});

window.addEventListener('load', () => {

});
