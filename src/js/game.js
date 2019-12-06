const Game = (() => {
  // const gameSymbols = ['X', 'O'];
  const WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]];
  // let playerTurn = 0;
  let winner;
  let playerOne;
  let playerTwo;
  let board;
  const init = (_player1, _player2, _board) => {
    playerOne = _player1;
    playerTwo = _player2;
    board = _board;
    winner = null;
  };
  const getWinner = () => winner;
  // const chooseFirstPlaySymbol = () => {
  //   const rndIndx = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
  //   return gameSymbols[rndIndx];
  // };
  // const firstPlayer = () => {
  //   const randSymbol = chooseFirstPlaySymbol();
  //   if (playerOne.getSymbol() === randSymbol) {
  //     playerTurn = 0;
  //     return playerOne;
  //   }
  //   playerTurn = 1;
  //   return playerTwo;
  // };
  // const swapPlayerTurn = () => {
  //   playerTurn = playerTurn === 1 ? 0 : 1;
  //   return playerTurn;
  // };
  // const currentPlayer = () => {
  //   if (swapPlayerTurn() === 0) return playerOne;
  //   return playerTwo;
  // };
  const winnerStatusUpdate = (player) => {
    const playerPositions = [];
    board.state.forEach((elem, indx) => {
      if (elem === player.getSymbol()) playerPositions.push(indx);
    });
    WINNING_COMBINATIONS.forEach((winningCase) => {
      if ((winningCase && playerPositions).length === 3) {
        winner = player;
        return winner;
      }
    });
  };
  const draw = () => board.isFull();
  const isGameOver = () => getWinner() || draw();
  // const makeMove = (player, position) => {
  //   board.updateStatus(player.getSymbol(), position);
  //   winnerStatusUpdate(player);
  // };
  const playTurn = (player, position) => {
    board.updateState(player.getSymbol(), position);
    winnerStatusUpdate(player);
    if (!isGameOver()) {
      playerTwo.playAsMachine(board.getFreePositions());
      winnerStatusUpdate(playerTwo);
    }
    if (isGameOver()) return true;
    return false;
  };
  return {
    // playerTurn,
    // firstPlayer,
    // currentPlayer,
    // makeMove,
    // winnerStatusUpdate,
    getWinner,
    init,
    isGameOver,
    playTurn,
  };
})();

export default Game;
