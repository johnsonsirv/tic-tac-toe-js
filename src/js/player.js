const Player = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  const playAsMachine = (freePositions) => {
    // return random move as computer
    const max = freePositions.length - 1;
    const randomIndex = Math.floor(Math.random() * (max - 0 + 1)) + 0;
    return freePositions[randomIndex] - 1; // position on board
  };
  return {
    getName,
    getSymbol,
    playAsMachine,
  };
};

export default Player;
