const Player = (name, symbol, type = 'human') => {
  const getType = () => type;
  const getName = () => name;
  const getSymbol = () => symbol;
  // const isMyTurn = (currentSymbol) => {
  //   const playerSym = getSymbol();
  //   return playerSym === currentSymbol;
  // };
  const playAsHuman = (uiObject) => uiObject.askPosition(getName());
  const playAsMachine = (freePositions) => {
    // return random move as computer
    const max = freePositions.length - 1;
    const randomIndex = Math.floor(Math.random() * (max - 0 + 1)) + 0;
    return freePositions[randomIndex] - 1; // position on board
  };
  const play = (playAs, uiObject = null, freePositions = null) => {
    let myNextMove = null;
    if (playAs === 'human') {
      myNextMove = playAsHuman(uiObject);
    } else if (playAs === 'machine') {
      myNextMove = playAsMachine(freePositions);
    }
    return myNextMove;
  };
  return {
    play,
    getName,
    getSymbol,
    getType,
    playAsMachine,
  };
};

export default Player;
