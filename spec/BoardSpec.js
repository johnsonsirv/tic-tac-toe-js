/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import * as board from '../src/js/board.js';

describe('board state #isFull()', () => {
  it('should return true if all board state has been filled with X or O', () => {
    for (let i = 0; i < 8; i += 1) {
      board.updateState('X', i);
    }
    expect(board.isFull()).toBe(true);
  });
  it('should return false if board state has not been filled with X or O', () => {
    board.state[5] = 'X';
    expect(board.isFull()).toBe(false);
  });
});
describe('board state #isPositionFree()', () => {
  it('should return true if specified position is NOT occupied', () => {
    board.state[5] = 'O';
    expect(board.isPositionFree(4)).toBe(true);
  });
  it('should return false if specified position is occupied', () => {
    board.state[5] = 'O';
    expect(board.isPositionFree(5)).toBe(false);
  });
});
describe('board state #updateState()', () => {
  it('should update board state at player position with their symbol', () => {
    board.updateState('X', 5);
    expect(board.state[5]).toEqual('X');
  });
});
