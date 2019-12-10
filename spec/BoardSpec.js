/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import Board from '../src/js/board.js';

afterAll(() => {
  Board.reset();
});

describe('Board state #isFull()', () => {
  afterEach(() => {
    Board.reset();
  });
  it('should return true if all Board state has been filled with X or O', () => {
    for (let i = 0; i <= 8; i += 1) {
      Board.updateState('X', i);
    }
    expect(Board.isFull()).toBe(true);
  });
  it('should return false if Board state has not been filled with X or O', () => {
    Board.updateState('X', 5);
    expect(Board.isFull()).toBe(false);
  });
});
describe('Board state #isPositionFree()', () => {
  it('should return true if specified position is NOT occupied', () => {
    Board.updateState('O', 5);
    expect(Board.isPositionFree(4)).toBe(true);
  });
  it('should return false if specified position is occupied', () => {
    Board.updateState('O', 5);
    expect(Board.isPositionFree(5)).toBe(false);
  });
});
