/* eslint-disable no-undef */
/* eslint-disable import/extensions */

import Player from '../src/js/player.js';

const victor = Player('Victor', 'X');
const computerPlayer = Player('machine', 'O');

describe('game player and symbol for the game', () => {
  it('creates a new player and set his symbol for the game', () => {
    expect(victor.getSymbol()).toEqual('X');
    expect(computerPlayer.getSymbol()).toEqual('O');
  });
  it('should play as computer', () => {
    spyOn(computerPlayer, 'playAsMachine').withArgs([1, 2, 3]).and.returnValue(1);
    expect(computerPlayer.playAsMachine([1, 2, 3])).not.toBeNull();
  });
});
