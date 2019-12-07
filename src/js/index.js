/* eslint-disable import/extensions */
// get the cells and ad event click lisener
import Player from './player.js';
import Board from './board.js';
import Game from './game.js';
import GameUI from './gameui.js';

let playerOne;
let playerTwo;
Board.reset();
const DOMBoardCells = GameUI.getDOMBoardCells();

const disableObjects = () => {
  document.getElementById('start-new-game')
    .setAttribute('disabled', 'disabled');
  document.getElementById('player-name')
    .setAttribute('disabled', 'disabled');
  document.getElementById('welcome')
    .setAttribute('class', 'no-display');
};

const prepareDOMForNewGame = () => {
  document.getElementById('board-section')
    .removeAttribute('class');
  disableObjects();
};
const persistToLocalStorage = (data) => localStorage.setItem('human', data);
const getNameFromLocalStorage = () => {
  let humanName;
  if (localStorage.getItem('human') === null) {
    humanName = document.getElementById('player-name').value;
    persistToLocalStorage(humanName);
  } else {
    const storedName = localStorage.getItem('human');
    const updatedName = document.getElementById('player-name').value;
    if (storedName !== updatedName) {
      persistToLocalStorage(updatedName);
      document.getElementById('player-name').value = updatedName;
      return updatedName;
    }
    humanName = storedName;
  }
  return humanName;
};

const startNewGame = () => {
  const humanPlayer = getNameFromLocalStorage();
  playerOne = Player(humanPlayer, 'O');
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
        .renderGameOverBoard(gameWinner, Board.currentState(), won);
    } else GameUI.renderDOMBoard(Board.currentState());
  }, { once: true });
});

const rememberPlayerName = () => {
  if (localStorage.getItem('human') !== null) {
    document.getElementById('player-name').value = localStorage.getItem('human');
  }
};

window.addEventListener('load', () => {
  rememberPlayerName();
});
