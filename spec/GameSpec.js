/* eslint-disable no-undef */
/* eslint-disable import/extensions */

import Player from '../src/js/player.js';
import Board from '../src/js/board.js';
import Game from '../src/js/game.js';

const player1 = Player('Victor', 'X');
const player2 = Player('Computer', 'O');
afterAll(() => {
  Board.reset();
});
describe('#init', () => {
  it('it initializes a new game', () => {
    Board.reset();
    Game.init(player1, player2, Board);
    expect(Game.getHumanPlayer().getSymbol()).toEqual('X');
  });
});

describe('#play turn', () => {
  it('should position the player\'s move on the board', () => {
    Board.reset();
    Game.init(player1, player2, Board);
    Game.playTurn(player1, 3);
    expect(Board.currentState()[3]).toEqual('X');
  });
});

describe('#get winner', () => {
  it('should return null when there is no winner', () => {
    Board.reset();
    Game.init(player1, player2, Board);
    expect(Game.getWinner()).toBeNull();
  });
  it('should not return null when there is a winner', () => {
    Board.reset();
    Game.init(player1, player2, Board);
    Board.updateState('X', 0);
    Board.updateState('X', 1);
    Game.playTurn(player1, 2);
    expect(Game.getWinner()).not.toBeNull();
  });
});

describe('#game over status', () => {
  it('should return true when game outcome is a tie', () => {
    Board.reset();
    Game.init(player1, player2, Board);
    let i = 0;
    while (i <= 4) {
      Board.updateState('X', i);
      Board.updateState('O', i + 1);
      i += 2;
    }
    Board.updateState('O', 6);
    Board.updateState('X', 7);
    Board.updateState('O', 8);
    expect(Game.isGameOver()).toEqual(true);
  });
  it('should return true when game outcome has a winner', () => {
    Board.reset();
    Game.init(player1, player2, Board);
    Board.updateState('X', 0);
    Board.updateState('X', 1);
    Game.playTurn(player1, 2);
    expect(Game.isGameOver().getSymbol()).toEqual('X');
  });
});
