/* eslint-disable no-undef */
/* eslint-disable import/extensions */

import Player from '../src/js/player.js';
import Board from '../src/js/board.js';
import Game from '../src/js/game.js';

beforeAll(() => {
  // const player1 = Player('Victor', 'X');
  // const player2 = Player('Computer', 'O', 'machine');
  // const game = Game(player1, player2, Board);
});
let player1 = Player('Victor', 'X');
let player2 = Player('Computer', 'O', 'machine');
let game = Game(player1, player2, Board);
afterAll(() => {
  Board.reset();
  player1 = null;
  player2 = null;
  game = null;
});
describe('game first player', () => {
  it('should determine 1st player randomly; board state does not contain that symbol', () => {
    Board.state = [];
    const firstPlayer = game.firstPlayer();
    expect(Board.state.includes(firstPlayer.getSymbol())).toEqual(false);
  });
});
describe('game current player', () => {
  it('should swap game turn between players', () => {
    game.playerTurn = 0;
    const currentPlayer = game.currentPlayer();
    expect(currentPlayer.getSymbol()).toEqual(player2.getSymbol());
  });
});
describe('make move in the game', () => {
  it('should position the player\'s move on the board', () => {
    game.makeMove(player2, 3);
    expect(Board.state[3]).toEqual('O');
  });
});
describe('update winner status', () => {
  it('should update game winner to current player if player move results to a win', () => {
    Board.state = ['X', 'X', 'X'];
    game.winnerStatusUpdate(player1);
    const winner = game.getWinner();
    expect(winner.getSymbol()).toEqual(player1.getSymbol());
  });
  it('should NOT update winner status when current player move does NOT result to win.', () => {
    Board.state = ['X'];
    game.winnerStatusUpdate(player1);
    const winner = getWinner();
    expect(winner).toBeNull();
  });
});
describe('game over status', () => {
  it('should return true when game outcome is a tie', () => {
    Board.state = ['X', 'O', 'O', 'O', 'X', 'X', 'X', 'X', 'O'];
    expect(game.isGameOver()).toEqual(true);
  });
  it('should return true when game outcome has a winner', () => {
    Board.state = ['X', 'X', 'X'];
    expect(game.isGameOver()).toEqual(true);
  });
});
