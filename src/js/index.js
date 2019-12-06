/* eslint-disable import/extensions */
// get the cells and ad event click lisener
import Player from './player.js';
import Board from './board.js';
import Game from './game.js';
import GameUI from './gameui.js';

const playerOne = Player('player 1', 'O');
const playerTwo = Player('machine', 'X', 'machine');
const DOMBoardCells = GameUI.getDOMBoardCells();
const startNewGame = () => {
  Board.reset();
  Game.init(playerOne, playerTwo, Board);
  GameUI.renderDOMBoard();
};
DOMBoardCells.forEach((cell, position) => {
  cell.addEventListener('click', () => {
    // run the game here
    const playOutcomeIsGameOver = Game.playTurn(playerOne, position);
    if (playOutcomeIsGameOver) GameUI.renderGameOverBoard(Game.getWinner(), playOutcomeIsGameOver);
    else GameUI.renderDOMBoard();
    // DOMBoardCells[position].innerHTML = playerOne.getSymbol();
  }, { once: true });
});

startNewGame();
