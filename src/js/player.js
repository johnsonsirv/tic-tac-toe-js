const Player = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  const isMyTurn = (currentSymbol) => {
    const playerSym = getSymbol();
    return playerSym === currentSymbol;
  };
  const play = (currentSymbol, uiObject) => {
    let myNextMove = null;
    if (isMyTurn(currentSymbol)) {
      myNextMove = uiObject.askPosition(getName());
    }
    return myNextMove;
  };
  return {
    getName,
    getSymbol,
    play,
  };
};

export default Player;
