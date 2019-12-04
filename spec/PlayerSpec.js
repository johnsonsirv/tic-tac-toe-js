/* eslint-disable no-undef */
/* eslint-disable import/extensions */

import Player from '../src/js/player.js';
import GameUI from '../src/js/gameui.js';

describe('game player and symbol for the game', () => {
  it('creates a new player and set his symbol for the game', () => {
    const victor = Player('Victor', 'X');
    const computerPlayer = Player('Computer', 'O');
    expect(victor.getSymbol()).toEqual('X');
    expect(computerPlayer.getSymbol()).toEqual('O');
  });
  it('should play if the game passes my symbol', () => {
    const victor = Player('Victor', 'X');
    const computerPlayer = Player('Computer', 'O');
    spyOn(victor, 'play').withArgs('X', GameUI).and.returnValue(2);
    spyOn(computerPlayer, 'play').withArgs('X', GameUI).and.returnValue(null);
    expect(victor.play('X', GameUI)).not.toBeNull();
    expect(computerPlayer.play('X', GameUI)).toBeNull();
  });
});
