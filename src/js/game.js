const Game = (() => {
  const WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]];
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
  const winnerStatusUpdate = (player) => {
    const playerPositions = [];
    board.currentState().forEach((elem, indx) => {
      if (elem === player.getSymbol()) playerPositions.push(indx);
    });
    WINNING_COMBINATIONS.forEach((winningCase) => {
      if ((winningCase && playerPositions).length === 3) {
        winner = player;
        // return winner;
      }
    });
  };
  const draw = () => board.isFull();
  const isGameOver = () => getWinner() || draw();
  const playTurn = (player, position) => {
    board.updateState(player.getSymbol(), position);
    winnerStatusUpdate(player);
    if (!isGameOver()) {
      const machineMove = playerTwo.playAsMachine(board.getFreePositions());
      board.updateState(playerTwo.getSymbol(), machineMove);
      winnerStatusUpdate(playerTwo);
    }
    if (isGameOver()) return true;
    return false;
  };
  return {
    getWinner,
    init,
    isGameOver,
    playTurn,
  };
})();

export default Game;
